import React from 'react';
import ReactDOM from 'react-dom';
import Moment from './Moment';

let moment = {
  time: '21',
  description: 'Goal'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Moment moment={moment} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
