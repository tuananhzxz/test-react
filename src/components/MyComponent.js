import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {

    state = {
        listUser: [
            {id : 1, name : "Tuan Anh", age : 100},
            {id : 2, name : "Tuan Em", age : 1000}
        ]
    }

    handleAddUser = (userObj) => {
        console.log(userObj)
        this.setState({
            listUser : [userObj, ...this.state.listUser]
        })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser]
        listUserClone = listUserClone.filter((item) => item.id !== userId)
        this.setState({
            listUser : listUserClone
        })
    }
    render() {
        
        return (
            <div>
                <UserInfo handleAddUser={this.handleAddUser}></UserInfo>
                <DisplayInfo listUser = {this.state.listUser}
                            handleDeleteUser = {this.handleDeleteUser}
                ></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent