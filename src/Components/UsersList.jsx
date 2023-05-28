import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux-module/actions/user-action";
import { Table } from "react-bootstrap";

const UsersList = () => {

    const users = useSelector(state => state.allUsers.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h2 className="text-center">All Users</h2>

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td ><img  className="action-btn" src='./pencil.png' /></td>
                            <td><img className="action-btn" src='./trash.png' /></td>
                        </tr>
                    ))}

                </tbody>
            </Table>


            <div className="row">

            </div>
        </div>
    );
}

export default UsersList;