import React from "react";

class DisplayInfo extends React.Component {
    
    render() {
        const {age, name} = this.props
        return (
            <div>
                My name is {name}
                <br></br>
                Age : {age}
            </div>
        )
    }

}

export default DisplayInfo