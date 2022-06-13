import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'


export default function Test() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (

        <div className="lecture">

            <br></br>

            <div className="dash-header">

                <div className="dash-title">
                        <b>Quiz</b>
                </div>

            </div>

            <div className="inner">

                <div>No Schedule Test</div>

                <div>
                    <button onClick={handleShow}>Create Quiz</button>
                </div>

            </div>

            <>
                <Modal show={show} onHide={handleClose}>
                    
                    <Modal.Body>
                        {/* <Form > */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Course Title</Form.Label>
                            <Form.Control
                                type="text"

                                placeholder="Course"
                                autoFocus

                            /><br></br>
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type="text"
                                min="100"

                                placeholder="Department"

                                autoFocus
                            />


                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Level</Form.Label>
                            <Form.Control type="number" min='100' max='500'  />

                            <br></br>

                            <Form.Label>Number of questions</Form.Label>
                            <Form.Control type="number" min='10' max='50'  />

                            <br></br>

                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="number" min='100' max='500'  />

                            <br></br>

                            <Form.Label>Quiz Date</Form.Label>

                            <Form.Control
                                type="date"

                            />

                            <br></br>

                            <Form.Label>Quiz Time</Form.Label>

                            <Form.Control
                                type="time"
                                
                            />


                        </Form.Group>
                        {/* </Form> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="warning">
                            Create Quiz
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>



        </div>

    );


}