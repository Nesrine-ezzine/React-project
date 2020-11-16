import  {Card, ListGroup, ListGroupItem} from "react-bootstrap"

function Cards () {
    return ( 
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cdn2.tendance-parfums.com/media/catalog/product/cache/5d4572d703c28aedeb7e374cd76a4024/n/5/n5-chanel-eau-de-parfum-vaporisateur-100-ml_1.jpg" />
    <Card.Body>
        <Card.Title>Card 1</Card.Title>
        <Card.Text>
        Buy the perfume and the prestige.
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Buy</ListGroupItem>
    <ListGroupItem>share</ListGroupItem>
        <ListGroupItem>more</ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://fimgs.net/mdimg/perfume/403x538.10190.jpg" />
    <Card.Body>
        <Card.Title>Card 2</Card.Title>
        <Card.Text>
        Good quality, good sent, lower price.
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Buy</ListGroupItem>
    <ListGroupItem>share</ListGroupItem>
        <ListGroupItem>more</ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>
    </div>
    );
    }

export default Cards ()