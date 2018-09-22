import React from 'react';
import './Moment.css';

const Moment = (props) => {
  return (
    <div className='moment'>
      <div className='moment__time'>{props.moment.time}</div>
      <p className='moment__description'>{props.moment.description}</p>
    </div>
  );
}

export default Moment;
