import React from 'react';
import './KeyMoments.css';

import Moment from '../Moment/Moment';

export default class KeyMoments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMoment: ''
    }
  }

  selectMoment(momentId, commentId) {
    this.setState({ selectedMoment: momentId }, () => {
      this.props.handleHighlightComment(commentId);
    });
  }

  render(props) {
    return (
      <div id='key-moments'>
        <h1 className='key-moments__heading'>Key Moments</h1>

        {this.props.keyMoments.map((moment, index) => {
          return <Moment moment={moment} selectedMoment={this.state.selectedMoment} handleClick={this.selectMoment.bind(this)} key={index} />
        })}
      </div>
    );
  }
}
