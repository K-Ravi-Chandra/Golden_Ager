import React from 'react'
import styled from 'styled-components';
import { Jumbotron, Container,Button } from 'reactstrap';

const Wrapper = styled.section`
  padding: 4em;
  background: gainsboro;
`;


function About() {
    return (
        <Wrapper>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-5">Major problems faced by senior citizens in India</h1>
                    <hr />
                    <p className="lead">The elderly population in India is one of the fastest-growing in the world. At present India is considered as the second-largest global population of ageing citizens. It is expected that the present number will further increase by 2050. Nevertheless, India lacks the basic infrastructure and expertise to support the health and welfare of the elderly.</p>
                    <p></p>
                    <p className="lead">According to various surveys across the country for most Indian senior citizens the biggest concerns that are prevailing are Healthcare costs, lack of financial support and seclusion. In addition to this most of the aged people are not accorded the dignity of care they deserve. So caretaker for elderly is utmost important nowadays.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Container>

            </Jumbotron>
        </Wrapper>
    )
}

export default About
