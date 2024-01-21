import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
// import axiosInstance from './utils/axios';

const App = () => {

  const [selectedFiles, setSelectedFiles] = useState()
  const [progress, setProgress] = useState()

  const submitHandler = async (e) => {
    e.preventDefault(); // prevent the form from submitting
    let formData = new FormData();
    formData.append("file", selectedFiles[0]);

    try {
      const res = await axios.post("https://file.upload.ansabr.tech/upload", formData,
        {
          // withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
          },
          onUploadProgress: data => {
            setProgress(Math.round((100 * data.loaded) / data.total))
          }
        });

      // fetch("https://file.upload.ansabr.tech/upload", {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     "Access-Control-Allow-Headers": "*",
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "*"
      //   },
      //   onUploadProgress: data => {
      //     setProgress(Math.round((100 * data.loaded) / data.total))
      //   }
      // }).then((response) => {
      //   console.log(response.status)
      // })

      console.log(res);
      // alert('success')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 4, offset: 3 }}>
            {/* <Form action="http://localhost:8080/upload"
              method="POST"
              encType="multipart/form-data"
              onSubmit={submitHandler}
              >
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" name="file" onChange={e => {
                  setSelectedFiles(e.target.files)
                  setProgress(0)
                }} />
              </Form.Group>
              <Form.Group>
                <Button variant="info" type="submit">Upload</Button>
              </Form.Group>
              Progress<br />
              {progress && <ProgressBar now={progress} label={`${progress}%`} />}
            </Form> */}

            <Form
              method="POST"
              encType="multipart/form-data"
              onSubmit={submitHandler}
            >
              <Form.Group className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" name="file" id="file" onChange={e => {
                  setSelectedFiles(e.target.files)
                  setProgress(0)
                }} />
              </Form.Group>
              <Form.Group>
                <Button variant="info" type="submit">Upload</Button>
              </Form.Group>
              Progress<br />
              {progress && <ProgressBar now={progress} label={`${progress}%`} />}
            </Form>

          </Col>
        </Row>
      </Container>
    </>

  )
}

export default App;