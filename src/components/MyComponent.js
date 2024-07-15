import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {

    
    render() {
        const myAge = 20
        return (
            <div>
                <UserInfo></UserInfo>
                <DisplayInfo name = "Tuan anh" age = {myAge}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent