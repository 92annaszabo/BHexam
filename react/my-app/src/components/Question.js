import React from 'react'
import {Button, Container, Row, Col, Image, Badge} from 'react-bootstrap'
import { connect } from "react-redux";

export default class Question extends React.Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col> {this.props.question.title}</Col>
                    <Col>  {this.props.question.user}</Col>
              
                </Row>            
                <Row>
                {this.props.question.text}
                </Row>
                <Row>
                    {this.props.tags.foreach((tag, idx) => {
                        return <Badge>{tag.name}</Badge>
                    })}
                </Row>
            </Container>

        )
    }
}