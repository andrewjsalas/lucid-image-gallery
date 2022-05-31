import { Button, Container, Form, Row, Col, Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import { storage, } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL, list, listAll} from 'firebase/storage'
import { v4 } from 'uuid'
import Masonry from "masonry-layout"

const Home = () => {
  const [image, setImage] = useState(null)
  const [imageUrls, setImageUrls] = useState([])
  const [progress, setProgress] = useState(0)

  // Handle file upload and update state
  function handleChange(e) {
    setImage(e.target.files[0])
  }

  // uplods the image
  const handleUpload = () => {
    if (!image) {
      alert('Please upload an image (png, jpg, or jpgeg)')
    }
    // Create reference to firebase storage and create new image folder
    // Also assigns random ID to each image
    const storageRef = ref(storage, `images/${image.name + v4()}`)
    const uploadTask = uploadBytesResumable(storageRef, image)

    // Update upload progress
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      // Checks for errors
      (error) => console.log(error),
      () => {
        // Get image firebase url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url)
        })
      }
    )
  }

  // Grab images from storage and list them 
  const imagesListRef = ref(storage, 'images/')

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url])
        })
      })
    })
  }, )
  
  return (
    <>
    <Container>
      <Form>
        <Form.Group>
          <Form.Control 
            type="file"
            onChange={handleChange}
            accept='/image/*'
          />
        </Form.Group>
      </Form>

      <div className="text-center mt-4">
        <Button 
          variant="dark" 
          // className="rounded-circle" 
          size="lg"
          type="file"
          onClick={handleUpload}
          >Upload
        </Button>
      </div>
      <p>{progress} %</p>
      
      <hr />

      {/* Image grid */}
      <Row>
        {imageUrls.map((url, v4) => (
          <Col key={v4} xs={12} md={4} lg={3}>
            <Card >
              <Card.Img src={url} />
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
      
    </>
  )
}

export default Home