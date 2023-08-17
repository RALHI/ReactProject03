import React, {useState , Fragment} from 'react';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

const dummy_userdata = [];

function App() {

  const [userdataitem , setuserdata] = useState(dummy_userdata);

  const UserDataItem = (userdata) => {

    setuserdata((prevdata) => {
      return[userdata,
        ...prevdata];
    })

    console.log(userdata);
  }

  return (
    <Fragment>
        <AddUser onUserDataItem={UserDataItem}/>
        <UserList userdataitem={userdataitem}/> 
    </Fragment>
  );
}

export default App;
