import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  onInputChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
          placeholder="Get a 5 day forecast"
          className="form-control"
          value={this.state.query}
          onChange={this.onInputChange.bind(this)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
};

export default connect(null, mapDispatchToProps)(SearchBar)
