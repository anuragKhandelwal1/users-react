import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux-module/actions/user-action";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UsersList = () => {

    const users = useSelector(state => state.allUsers.users);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const onUpdate=(user)=>{
        if(!user.id){
            //route to add user
            navigate('/add-user');
        }else{
            //route to update
            navigate(`/user/:${user.id}`,{
                state:user
            })
        }
    }

    const removeUser =(id)=>{
        console.log(id)
    }

    return (       

        <div>

            <div className="add">
                <button className="btn btn-success" onClick={onUpdate}>Add New User</button>
            </div>

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
                            <td ><img  className="action-btn" src='./pencil.png' onClick={()=> onUpdate(user)} /></td>
                            <td><img className="action-btn" src='./trash.png' onClick={()=> onUpdate(user.id)} /></td>
                        </tr>
                    ))}

                </tbody>
            </Table>


            <div className="row">
                        {/* pagination */}
            </div>
        </div>
    );
}

export default UsersList;