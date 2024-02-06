import React from 'react';
import { Navibar } from '../components/navibar';
import { Books } from '../books';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import '../App.css';



export function Python() {
    return (
        <>
        <Navibar />
        <CardGroup>
            {Books.map((book, index) => (
            <Card className='card' data-bs-theme="dark" bg="dark" key={index} style={{borderRadius: '3.5%'}}>
                <Card.Img variant="top" className='card-cover' src={book.cover} style={{borderRadius: '0.5%'}}/>
                <Card.Body>
                <Card.Title className='card-title'>{book.title}</Card.Title>
                <Card.Text className='card-text'>{book.about}</Card.Text>
                {index === 2 && book.about.length < 300 && <br/>}
                </Card.Body>
                <ListGroup className="flush">
                <ListGroup.Item>Объём: {book.volume}</ListGroup.Item>
                <ListGroup.Item>Уровень: {book.level}</ListGroup.Item>
                <ListGroup.Item>Автор: {book.author}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Button variant={index === 1 || index === 2 ? 'warning disabled' : 'danger'}>Читать PDF</Button>
                </Card.Body>
            </Card>
            ))}
        </CardGroup>
        </>
    );
}

{/*export function Python() {

  return (
    <>
    <Navibar />
    <CardGroup>
        <Card className='card' data-bs-theme="dark" bg="dark">
        <Card.Img variant="top" src={book_one} />
        <Card.Body>
            <Card.Title className='card-title'>{book1.title  }</Card.Title>
            <Card.Text className='card-text'>{book1.about}</Card.Text>
        </Card.Body>
        <ListGroup className="flush">
            <ListGroup.Item>Объём: {book1.volume}</ListGroup.Item>
            <ListGroup.Item>Уровень: {book1.level}</ListGroup.Item>
            <ListGroup.Item>Автор: {book1.author}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button variant="danger">Читать PDF</Button>
        </Card.Body>
        </Card>
        <Card className='card' data-bs-theme="dark" bg="dark">
        <Card.Img variant="top-right" src={book_two} />
        <Card.Body>
            <Card.Title className='card-title'>{book2.title}</Card.Title>
            <Card.Text className='card-text'>{book2.about}</Card.Text>
        </Card.Body>
        <ListGroup className="flush">
            <ListGroup.Item>Объем: {book2.volume} стр.</ListGroup.Item>
            <ListGroup.Item>Уровень: {book2.level}</ListGroup.Item>
            <ListGroup.Item>Автор: {book2.author}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button variant="danger">Читать PDF</Button>
        </Card.Body>
        </Card>
        <Card className='card' data-bs-theme="dark" bg="dark">
        <Card.Img variant="top-right" src={book_three} />
        <Card.Body>
            <Card.Title className='card-title'>{book3.title}</Card.Title>
            <Card.Text className='card-text'>{book3.about}</Card.Text>
            <br/>
        </Card.Body>
        <ListGroup className="flush" variant="">
            <ListGroup.Item>Объем: {book3.volume} стр.</ListGroup.Item>
            <ListGroup.Item>Уровень: {book3.level}</ListGroup.Item>
            <ListGroup.Item>Автор: {book3.author}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Button variant="danger">Читать PDF</Button>
        </Card.Body>
        </Card>
    </CardGroup>
    </>
  );
}*/}

export default Python;