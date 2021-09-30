import React from 'react';
import { Jumbotron, Container,Button } from 'reactstrap';
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
                        <Button color="primary" href="/Golden_Ager/signup">Join us</Button>
                    </p>
                </Container>

            </Jumbotron>
        </Wrapper>
    );
  }
  
  export default Header;