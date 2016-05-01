import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((forecast) => {
      return forecast.main.temp;
    });
    const humidities = cityData.list.map((forecast) => {
      return forecast.main.humidity;
    });
    const pressures = cityData.list.map((forecast) => {
      return forecast.main.pressure;
    });

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={humidities} color="green" />
        </td>
        <td>
          <Chart data={pressures} color="red" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
