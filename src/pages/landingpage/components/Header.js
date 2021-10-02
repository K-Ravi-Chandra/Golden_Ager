import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function Header() {
    return (
        <Wrapper>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-5">Let us Make them smile Again!</h1>
                    {/* <hr /> */}
                    <p className="lead">An inovative step to help Senior Citizens</p>
                    <p className="lead">
                    <Button as={Link} to="/Golden_Ager/signup" variant="primary">Join us</Button>{' '}
                    </p>
                </Container>

            </Jumbotron>
        </Wrapper>
    );
  }
  
  export default Header;