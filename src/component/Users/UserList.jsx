import React, {Fragment} from 'react';
import UserListData from './UserListData';

function UserList (props) {

    if (props.userdataitem.length === 0) {
        return <h2>No Data Available</h2>
    }else{
        return(
            <Fragment>
                {console.log(Array.isArray(props.userdata))}
                <ul>
                    {
                        props.userdataitem.map((e) => (
                            <UserListData 
                                key={e.id}
                                id={e.id} 
                                username={e.username} 
                                userdob={e.userdob}
                                usercontact={e.usercontact}
                                useraddress={e.useraddress}
                            />
                        ))
                    }
                </ul>
            </Fragment>
        );
    }    
}

export default UserList;