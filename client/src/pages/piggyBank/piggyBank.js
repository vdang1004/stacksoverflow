import React, { Component } from 'react';
import './piggyBank.css';
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

class piggyBank extends Component {
    state = {  
        counter: 0,
        imageUrl: '../../../images/pigBank.jpg',
        Goal: '',
        Current: '',
        Add: '',
        Subtract: '',

    };

    handleIncrement = () => {
        this.setState({ count: this.state.counter ++});

    }

    renderYesorNo = () => {
        if (this.state.counter === 0) {
            return "Guess you're waitng for pigs to fly"
        }


        return <p>You have {this.state.counter} Piggies in the Bank! </p>;
    }


    change = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
            
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        return <p>{this.state.onSubmit}</p>;
    }

    /*renderAdd = () => {
        if (this.state.Add === true) {
            return "PEACE LOVE AND BACON GREASE!"
        }
    
    }
    
    renderSubtract = () => {
        if (this.state.Subtract === true) {
            return "Pig's won't be flying anytime soon...."
        }
    }

    */

    render() { 
        return (  
            <div className="main-container">
            <Container>
              <Nav/>
              <Row>
                <Col size="md-12">
                  <Jumbotron>
                    <h1>Piggy Bank</h1>
                  </Jumbotron>
                </Col>
              </Row>

              <Row>
              <Col size="md-12">
                  <h4>"So you don't have to wait til' pigs fly, just til they break!"</h4>
                  <img className="pigImage" src={this.state.imageUrl} alt="Piggy Bank"/>
                </Col>
              </Row>

              <Row>
              <Col size ="md-12">
              <p>{this.state.count}</p>
              <button onClick = {this.handleIncrement}>Add Savings</button>
              <p>{this.renderYesorNo()}</p>
               
              </Col>
              </Row>

              <Row>
              <Col size ="md-12">
              <form>
              <input className="savingsForm" name="Goal" placeholder="Goal Amount" value={this.state.Goal} onChange={e => this.change(e)}></input>
              <input className="savingsForm" name="Current" placeholder="Current Amount" value={this.state.Current} onChange={e => this.change(e)}></input>
              <input className="savingsForm" name="Add" placeholder="Add Amount" value={this.state.Add} onChange={e => this.change(e)}></input>
              <input className="savingsForm" name="Subtract" placeholder="Subtract Amount" value={this.state.Subtract} onChange={e => this.change(e)}></input>
              <button onClick={(e) => this.onSubmit(e)}/*onClick= {this.renderAdd}*/>+</button>
              <button /*onClick = {this.renderSubtract}*/>-</button>
              <p></p>
              </form>
              </Col>
              </Row>
            </Container>
            </div>
        );
    }




}





//ReactDOM.render(<piggyBank />, mountNode);
export default piggyBank;