import {Form, Button} from 'react-bootstrap';

const SignUp = () => {
    return(
        <div className='col-10 mx-auto mt-5'>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      If not a Registered user please go to the signup page
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="success" type="submit">
    Login
  </Button>
</Form>
        </div>
    )
}

export default SignUp;