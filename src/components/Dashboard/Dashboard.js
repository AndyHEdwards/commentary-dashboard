import React from 'react';
import './Dashboard.css';

import LiveCommentary from '../LiveCommentary/LiveCommentary';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    fetch('data.json').then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({
        comments: json.comments
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div id='dash-board'>
        <LiveCommentary comments={this.state.comments} />
      </div>
    );
  }
}
