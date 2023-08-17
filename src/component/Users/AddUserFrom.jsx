import { useState , Fragment } from 'react';
const AddUserFrom = (props) => {

    const [UserData , setUserData] = useState({
        'username': '',
        'userdob': '',
        'usercontact': '',
        'useraddress': ''
    });

    const usernameHandler = (event) => {
        setUserData((prevdata) => {
            return{
                ...prevdata,
                'username':event.target.value
            };
        });
    };

    const userdobHandler = (event) => {
        setUserData((prevdata) => {
            return{
                ...prevdata,
                'userdob':event.target.value
            };
        });
    };

    const usercontactHandler = (event) => {
        setUserData((prevdata) => {
            return{
                ...prevdata,
                'usercontact':event.target.value
            };
        });
    };

    const useraddressHandler = (event) => {
        setUserData((prevdata) => {
            return{
                ...prevdata,
                'useraddress':event.target.value
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if(UserData.username.trim().length === 0){
            alert("Please enter user name");
        }else if(UserData.userdob.trim().length === 0){
            alert("Please enter user date of birth");
        }else if(UserData.usercontact.trim().length === 0){
            alert("Please enter user contact");
        }else if(UserData.useraddress.trim().length === 0){
            alert("Please enter user address");
        }else{
            const userdata = {
                id: Math.random().toString(),
                username: UserData.username,
                userdob: UserData.userdob,
                usercontact: UserData.usercontact,
                useraddress: UserData.useraddress
            }
    
            console.log(userdata);

            props.onFetchUserData(userdata);

            setUserData(() => {
                return{
                    'username': '',
                    'userdob': '',
                    'usercontact': '',
                    'useraddress': ''
                };
            })
        }
    }

    return(
        <Fragment>
            <form onSubmit={submitHandler}>
                <div>
                    <label id='username'>Full Name</label>
                    <input type='text' value={UserData.username} onChange={usernameHandler}/>
                </div>

                <div>
                    <label id='userdob'>Date of Birth</label>
                    <input type='date' value={UserData.userdob} onChange={userdobHandler}/>
                </div>

                <div>
                    <label id='usercontact'>Contact</label>
                    <input type='number' value={UserData.usercontact} onChange={usercontactHandler}/>
                </div>

                <div>
                    <label id='useraddress'>Address</label>
                    <input type='text' value={UserData.useraddress} onChange={useraddressHandler}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </Fragment>
    );
}

export default AddUserFrom;