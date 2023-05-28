import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../redux-module/actions/user-action";

export const UserForm = () => {
    const {state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        first_name: state?.first_name || '',
        last_name: state?.last_name || '',
        email: state?.email || ''
    });

    const onChangeHandler = (ev) => {
        setUser({
            ...user,
            [ev.target.name]: ev.target.value
        });
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        dispatch(updateUser(user));
    }

    const onBack = () => {
        navigate('/');
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="row">
                        <h1 className="my-4">{state?.id ? 'Update' : 'Add'}  User</h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="first_name"
                                onChange={onChangeHandler}
                                value={state?.first_name || ''}
                            />

                            <label htmlFor="">Last Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="last_name"
                                onChange={onChangeHandler}
                                value={state?.last_name || ''}
                            />
                            <label htmlFor="">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                onChange={onChangeHandler}
                                value={state?.email || ''}
                                disabled={state?.email}
                            />
                            <button onClick={onSubmit} className="btn btn-primary mt-4">{state?.id ? 'Update' : 'Add'} User</button>
                        </div>
                    </form>
                </div>
            </div>
            <button onClick={onBack}>Back</button>
        </div>
    );
}