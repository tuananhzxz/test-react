import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import './DisplayInfo.scss'
// import logo from './../logo.svg'

// class DisplayInfo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isShowingHide : true
//         }
//     }

//     componentDidUpdate(prevPops, prevState, snapshot) {
//         if (this.props.listUser !== prevPops.listUser) {
//             if (this.props.listUser.length === 5) {
//                 alert("no ")
//             }
//         }
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             document.title = "Hello"
//         }, 3000)
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowingHide : !this.state.isShowingHide
//         })
//     }
//     render() {
//         const { listUser } = this.props
//         return (
//             <div className="display-container-info">
//                 {/* <img src={logo}></img> */}
//                 <div>
//                     <span onClick={() => {this.handleShowHide()}}>
//                         {this.state.isShowingHide === true ? "Hide list User" : "Show list User"}
//                     </span>
//                 </div>
//                 {this.state.isShowingHide &&
//                  <>
//                 {listUser.map((user) => {
//                     return (
//                         <div key={user.id} className={user.age > 30 ? "red" : "blue"}>
//                         My name is {user.name}
//                         <br></br>
//                         Age : {user.age}
//                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                         </div>
//                     )
//                 })}
//                 </>
//          }
//             </div>
//         )
//     }

// }
 
const DisplayInfo = (props) => {
    const { listUser } = props

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
                return (
                    <div className="display-container-info">
                        <div>
                            <span onClick={() => handleShowHideListUser()}>
                                {isShowHideListUser === true ? "Show list users" : "Hide list users"}</span>
                        </div>
                        {isShowHideListUser &&
                         <>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 30 ? "red" : "blue"}>
                                My name is {user.name}
                                <br></br>
                                Age : {user.age}
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                            )
                        })}
                        </>
                 }
                    </div>
                )
}

export default DisplayInfo