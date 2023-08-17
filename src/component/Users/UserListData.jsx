import React, { Fragment } from "react";
export default function  UserListData(props){
    return(
        <Fragment>
            <li>
                <div>
                    <h2>{props.username}</h2>
                    <h3>{props.userdob}</h3>
                    <h3>{props.usercontact}</h3>
                    <h3>{props.useraddress}</h3>
                </div>
            </li>
        </Fragment>
    );
}