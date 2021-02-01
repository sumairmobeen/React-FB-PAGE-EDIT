

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Container } from "react-bootstrap";


function Post() {
  const [data, updateval] = useState([]);
  function add(event) {
    event.preventDefault();

    let fname = document.getElementById('fname').value;
    let lastName = document.getElementById('lastName').value;
    let profileimg = document.getElementById('profileimg').value;
    let img1 = document.getElementById('img1').value;
    let posttext = document.getElementById('posttext').value;
    let newData = {
      fname: fname,
      lastName: lastName,
      profileimg: profileimg,
      img1: img1,
      posttext: posttext,
    }

    updateval((previous) => {
      return previous.concat([newData]);
    });


  }
  return (
    <div>
      <Container fluid="md" >
        <div className="row justify-content-md-center">
          <div className="col-md-6 form">
            <Form onSubmit={add} >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter Name" id="fname" required />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter Name" id="lastName" required />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Profile Image</Form.Label>
                  <Form.Control type="url" placeholder="Select Profile Image" id="profileimg" required />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Post Image</Form.Label>
                <Form.Control placeholder="Enter Image URL" id="img1" required />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Post Text</Form.Label>
                <Form.Control placeholder="Write Post" id="posttext" required />
              </Form.Group>

              <button>Post</button>

            
            </Form>
          </div>
        </div>
      </Container>







      {console.log("data :", data)}








      {data.map((eachItem, i) => {
        return (
          <div id="main-card">
            <Container fluid="md">
              <div className="row justify-content-md-center">
                <div className="col-md-6 card">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={eachItem.profileimg} alt="" style={{ width: 40, height: 40, borderRadius:"100%" }} />
                    </div>
                    <div className="col-md-10">
                      <p className="name">{eachItem.fname}</p>
                      <p className="name">{eachItem.lastName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="mt-2 mb-2">{eachItem.posttext}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <img src={eachItem.img1}
                        alt="{Post Image}" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )
      })}
    </div>
  )




}

ReactDOM.render(<Post />, document.querySelector('#root'));




