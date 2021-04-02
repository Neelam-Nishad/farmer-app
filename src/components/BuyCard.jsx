import { Card, Button } from 'react-bootstrap';

const BuyCard = (props) => {
    return (
        <>
            <div className='m-4'>
                <Card>
                    <Card.Header>{props.star}</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <div className='d-flex justify-content-center'>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        <img src={props.source} className='cropImage mt-0'/>
                        </div>
                        <Button variant="success btn-get-started">Contact</Button>
                        <Button variant="success btn-get-started" className='ml-5'>+</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default BuyCard;