
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'


export default function Resource() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (

        <div className="lecture">

            <br></br>

            <div className="dash-header">

                <div className="dash-title">
                    <b>Resource</b>
                </div>

            </div>

            <div className="inner">

                <div>No Upload Resource</div>

                <div>
                    <button onClick={handleShow}>Upload Resource</button>
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
                            <br></br>
                            <Form.Label>Resource</Form.Label><br></br>
                            <input
                                type="file"
                                autoFocus
                            />


                        </Form.Group>

                        {/* </Form> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success">
                            Upload Resource
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>



        </div>

    );


}