import React from 'react';
import './KeyMoments.css';

import Moment from '../Moment/Moment';

const KeyMoments = (props) => {
  return (
    <div id='key-moments'>
      <h1 className='key-moments__heading'>Key Moments</h1>

      {props.keyMoments.map((moment, index) => {
        return <Moment moment={moment} handleClick={props.handleHighlightComment} key={index} />
      })}
    </div>
  );
}

export default KeyMoments;
