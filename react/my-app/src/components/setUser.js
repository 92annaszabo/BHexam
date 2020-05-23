import React from 'react'
import {Button, Container, Row, Col, Image} from 'react-bootstrap'
import { connect } from "react-redux";


 class SetUser extends React.Component {
    render(){
        return(
            <Container>
                <Row>
                    Set setUser
                    <input type="text"></input>
                        <Button>OK</Button>
                </Row>
            </Container>

        )
    }
}

export default SetUser