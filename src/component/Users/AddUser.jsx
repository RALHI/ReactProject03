import AddUserFrom from "./AddUserFrom";

export default function AddUser(props) {

    const FetchUserData = (userdata) => {

        console.log(userdata);

        props.onUserDataItem(userdata);
    }

    return(
        <AddUserFrom onFetchUserData={FetchUserData}/>
    );
};