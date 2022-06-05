import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';
function App() {
  return (
    <div className="App">
      <div className='name'>
      <FullName/>
      </div>
      <div className='add'>
      <Address/>
      </div>
      <div >
      <ProfilePhoto/>
      </div>
      </div>
   
  );
}

export default App;
