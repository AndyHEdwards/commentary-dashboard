import React from 'react';
import './Dashboard.css';

import CommentList from '../CommentList/CommentList';

const Dashboard = () => {
  return (
    <div id='dash-board'>
      <CommentList />
    </div>
  );
}

export default Dashboard;
