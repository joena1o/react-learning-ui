import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'

export default function Lecture() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (

        <>



            <div className="lecture">

                <br></br>

                <div className="dash-header">

                    <div className="dash-title">
                        <b>Lecture</b>
                    </div>

                </div>
                <div className="inner">

                    <div>No Schedule Lecture</div>

                    <div>
                        <button onClick={handleShow}>Create Lecture</button>
                        <button>Join Lecture</button>
                    </div>

                </div>

            </div>



            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>

                    </Modal.Header>
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
                            <Form.Label>Lecture Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />

                            <br></br>

                            <Form.Label>Lecture Date</Form.Label>

                            <Form.Control
                                type="date"

                            />

                            <br></br>

                            <Form.Label>Lecture Date</Form.Label>

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
                        <Button variant="success">
                            Create Lecture
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>






        </>



    );


}