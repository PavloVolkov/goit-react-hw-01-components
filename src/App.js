import './App.css';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactionHistory from './components/transactionHistory/transacyionHistory.json';
import FriendsList from './components/friendsLIst/FriendsList';
import friendsList from './components/friendsLIst/friendList.json';
import profile from './components/profile/profile.json';
import ProfileCard from './components/profile/ProfileCard';
import Statistical from './components/statistic/Statistical';
import statistical from './components/statistic/statistic.json';

function App() {
  return (
    <div className="App">
      <ProfileCard data={profile} />
      <FriendsList data={friendsList} />
      <Statistical data={statistical} />
      <TransactionHistory data={transactionHistory} />
    </div>
  );
}

export default App;
