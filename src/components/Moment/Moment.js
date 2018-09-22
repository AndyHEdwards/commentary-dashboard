import React from 'react';
import './Moment.css';

export default class Moment extends React.Component {
  constructor(props) {
    super(props);

    this.highlightComment = this.props.handleClick.bind(this, this.props.moment.commentId);
  }

  render() {
    return (
      <div className='moment' onClick={this.highlightComment}>
        <div className='moment__time'>{this.props.moment.time}</div>
        <p className='moment__description'>{this.props.moment.description}</p>
      </div>
    );
  }
}
