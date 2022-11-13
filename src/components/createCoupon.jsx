import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Card, Button, Form } from 'react-bootstrap';

const CON = styled.div`
    display: flex;
    justify-contents: center;
`


const CreateCoupon = ({ logic }) => {

    return (
        <CON>
            <Form>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/img/coupon.png" />
                    <Card.Body>
                        {/* <Card.Title>Coupon Title</Card.Title> */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Coupon Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Coupon Title"
                                onChange={(event) => logic.setName(event.target.value)} />
                        </Form.Group>
                        <Card.Text>
                            Payment point amount
                        </Card.Text>
                        <Form.Select aria-label="Default select example"
                            value={logic.pointAmount}
                            onChange={(event) => logic.setPointAmount(event.currentTarget.value)}
                        >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Button
                            variant="danger"
                            className='my-3'
                            onClick={logic.onSubmit}
                        >Coupon issuance
                        </Button>
                    </Card.Body>
                </Card>
            </Form>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/img/coupon.png" />
                <Card.Body>
                    <Card.Title>Coupon Title</Card.Title>
                    <Form.Label>Coupon Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Coupon Title"
                        onChange={(event) => logic.setName(event.target.value)}
                        value={logic.name}
                    />
                    <Card.Text>
                        Payment point amount
                    </Card.Text>
                    <Form.Select aria-label="Default select example"
                    >
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Button
                        variant="danger"
                        className='my-3'

                    >Coupon issuance
                    </Button>
                </Card.Body>
            </Card> */}
        </CON>
    )



}

export default CreateCoupon;