import React from 'react'
import {Button, Container, Row, Col, Image} from 'react-bootstrap'
import { connect } from "react-redux";
import Question from './Question'

const mapStateToProps = state => {
    const {questions} = state
    return {questions}
}

class Questions extends React.Component {
    render(){
        return(
            this.props.questions.foreach((question, idx)=> {
                console.log(question)
               return(
                   <Question key={idx} question={question}/>
               ) 
            })
        )
    }
}

export default connect(mapStateToProps)(Questions)