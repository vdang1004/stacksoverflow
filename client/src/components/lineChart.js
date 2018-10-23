
import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';

function chartData() {
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Money Spent',
        fillColor: 'rgba(255,99,132,0.6)',
        strokeColor: 'rgba(255,99,132,0.6)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: 'rgba(255,99,132,0.6)',
        pointHighlightFill: 'rgba(255,99,132,0.6)',
        pointHighlightStroke: 'rgba(255,99,132,0.6)',
        data: [1250, 1590, 800, 899, 1280, 2200, 1120],
      },
      {
        label: 'Money Earned',
        fillColor: 'rgba(54,169,230,22,0.6)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [2560, 2280, 1120, 2560, 0, 3500, 0],
      },
    ]
  }
}

const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(255,99,132,0.6)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const styles = {
  graphContainer: {
    padding: '15px'
  }
}

class LineChartExample extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
      <div style={styles.graphContainer}>
        <LineChart data={this.state.data}
          options={options}
          width="600" height="250"/>
      </div>
    )
  }
}

export default LineChartExample;