import React from 'react';
import './Dashboard.css';

import LiveCommentary from '../LiveCommentary/LiveCommentary';
import KeyMoments from '../KeyMoments/KeyMoments';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      keyMoments: [],
      highlightedComment: ''
    };
  }

  componentDidMount() {
    fetch('data.json').then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({
        comments: json.comments,
        keyMoments: json.keyMoments
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  highlightComment(commentId) {
    this.setState({ highlightedComment: commentId });
  }

  render() {
    return (
      <div id='dash-board'>
        <LiveCommentary comments={this.state.comments} highlightedComment={this.state.highlightedComment} />
        <KeyMoments keyMoments={this.state.keyMoments} handleHighlightComment={this.highlightComment.bind(this)} />
      </div>
    );
  }
}
