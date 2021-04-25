import './App.css';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import items from './components/transactionHistory/transacyionHistory.json';
import FriendsList from './components/friendsLIst/FriendsList';
import friends from './components/friendsLIst/friendList.json';
import statistic from './components/statistic/statistic.json';
import Statystic from './components/statistic/Statystic';
import Profile from './components/profile/Profile';
import profile from './components/profile/profile.json';
function App() {
  return (
    <div className="App">
      <Profile
        avatar={profile.avatar}
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
      />
      <Statystic stats={statistic} />
      <FriendsList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;

/* <Profile
        avatar={profile.avatar}
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
      />
      <FriendsList data={friendsList} />
      <Statistic stats={statistic} />
      <TransactionHistory data={transactionHistory} /> */
