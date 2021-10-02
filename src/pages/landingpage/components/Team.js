import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Jumbotron, Container,Button ,Row,Col} from 'reactstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

export default function Team() {
    return (
        <Wrapper>
            <h4>Our Team</h4>
            <hr/>
<Row xs={2}  lg = {4} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card className="text-center" style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Text>
            Sample Text
          </Card.Text>
        </Card.Body>
      </Card>
      
    </Col>
  ))}
</Row>
        </Wrapper>
    )
}
