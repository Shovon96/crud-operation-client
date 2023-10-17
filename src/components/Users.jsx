import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = _id => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully')
                }
            })
            const remaining = users.filter(user => user._id !== _id)
            setUsers(remaining)
    }

    return (
        <div className="overflow-x-auto w-1/2 mx-auto">
            <h1 className="text-3xl font-bold my-3 text-center underline">Users: {users.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-lg font-semibold">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link to={`/users/${user._id}`}><small className="font-medium text-white px-3 p-2 rounded-lg btn-warning">update</small></Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-error">
                                        X</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;