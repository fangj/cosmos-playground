const React = require('react');
const ReactDOM = require('react-dom');
const Chart = require('react-d3-core').Chart;
const LineChart = require('react-d3-basic').LineChart;

module.exports= class ChartExample extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var chartData = this.props.data;
    var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }
    return (
      <Chart
      title={title}
      width={width}
      height={height}
      margins= {margins}
      >
      <LineChart
        showXGrid= {false}
        showYGrid= {false}
        margins= {margins}
        title={title}
        data={chartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
      />
             {this.props.c?<button onClick={_=>this.props.c.click()}>click me!</button>:null}
    </Chart>
    );
  }
}
