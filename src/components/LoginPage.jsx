import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <div className='col-10 mx-auto mt-5'>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>First and last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                    <FormControl />
                </InputGroup>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Label>Address</Form.Label>
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
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="Number" placeholder="Enter Number" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Set Password" />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Avatar" />
                </Form.Group>
                <Button variant="success" type="submit" className='btn-get-started'>
                    Sign Up
                </Button>
                <Button variant="success" type="submit" className='btn-get-started ml-3'>
                    Login
                </Button>
            </Form>
            
        </div>
    )
}

export default LoginPage;
