import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import { getAllUser } from "../../Service/apiService";

const TableUser = (props) => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchUser();
    },[])

    const fetchUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    return (
        <>
            <table className="table table-hover table-bordered">
            <thead>
                <tr>
                <th scope="col">NO</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length > 0 &&
                listUsers.map((user, index) => {
                    return (
                        <tr key={`table-user-${index}`}>
                        <th>{index + 1}</th>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button className="btn btn-primary">View</button>
                            <button className ="btn btn-warning mx-3">Update</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                        </tr>
                    )
                    })
                }
                {listUsers && listUsers.length === 0 &&
                    <tr>
                        <td colSpan={4}>Not found data</td>
                    </tr>
                }
                
            </tbody>
            </table>
        </>
    )
}

export default TableUser;