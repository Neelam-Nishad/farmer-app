import { Form, Button, Col } from 'react-bootstrap';


const Sell = () => {
    return (
        <div className='col-10 mx-auto mt-5'>
            <Form>
                <Form.Group controlId="formGridState">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Rice</option>
                        <option>Wheat</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label>Pickup Address</Form.Label>
                <Form.Row>
                    <Col xs={7}>
                        <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Zip" />
                    </Col>
                </Form.Row>


                <Form.Group controlId="">
                    <Form.Label>Contact Detail</Form.Label>
                    <Form.Control type="Number" placeholder="Enter Number" />
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Picture of Product" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description of Product</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree with t&c" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Sell;