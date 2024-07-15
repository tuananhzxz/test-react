import React from "react";

class UserInfo extends React.Component {
    state = {
        name : "Tuan Anh", 
        address : "Ha nam"
    }
    
    handleClick(event) {
        console.log("OK")
        console.log("This is : ", this.state.name)
        this.setState({
            name : "eric"
        })
    }

    handleOnchangeInput = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handOnchangeAge = (event) => {
        this.state({
            age : event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
            My name is {this.state.name}
                <button onClick={(event) => { this.handleClick(event) }}>Click di</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    value = {this.state.name}
                    type="text" 
                    onChange={(event) => this.handleOnchangeInput(event)}>
                
                    </input>
                    <button>submit</button>
                </form>  
        </div>
        )
    }

}

export default UserInfo