import React, { Component } from 'react';
//import '../../../../node_modules/spectre.css/dist/spectre.min.css';
import './styles.css';
import FormContainer from '../../containers/FormContainer';
import Chart from '../../components/Chart'
import LineChartExample from '../../components/lineChart'
import Nav from '../../components/Nav/Nav'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Footer from '../../components/Footer/Footer'


class RapSheetPage extends Component {

  constructor(){
    super();
    this.state = {
      chartData:{}
    };
  }

  componentWillMount(){
    this.getChartData();
  }
  getChartData() {
    //Ajax Calls hereeeeeee
    this.setState({
      chartData: {
        labels: ['taxes', 'loans', 'vacation', 'groceries'],
        datasets: [
            {
                label:'Money Spent',
                data: [
                    1500,
                    800,
                    650,
                    1200,
                    120
                ],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54,169,230,0.6)',
                    'rgba(153,109,232,0.6)',
                    'rgba(75,159,62,0.6)',
                    'rgba(255,99,132,0.6)'
                ]
            }
        ]
    }
    })
  }

  render() {
    return (
      <div className="container">
      <Nav />
      <Jumbotron />
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>Track Your Payments!</h3>
            <FormContainer />
          </div>
        </div>
        <br></br>
        <br></br>
        <Chart chartData={this.state.chartData} />
        <br></br>
        <br></br>
        <br></br>
        <LineChartExample />
        <Footer />
      </div>
    );
  }
}

export default RapSheetPage;
