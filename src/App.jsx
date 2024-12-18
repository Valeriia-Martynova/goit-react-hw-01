import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/friendlist/FriendList';
import TransactionHistory from './components/transactionhistory/TransactionHistory';

import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json'

import './App.css'

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;