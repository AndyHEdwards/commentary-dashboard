import React from 'react';
import './Moment.css';

export default class Moment extends React.Component {
  constructor(props) {
    super(props);

    this.selectMoment = this.props.handleClick.bind(this, this.props.moment.id, this.props.moment.commentId);
  }

  render(props) {
    return (
      <div className={"moment" + (this.props.selectedMoment === this.props.moment.id ? ' highlight' : '')} onClick={this.selectMoment}>
        <div className='moment__time'>{this.props.moment.time}</div>
        <p className='moment__description'>{this.props.moment.description}</p>
      </div>
    );
  }
}
