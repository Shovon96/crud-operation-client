import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {

   const lodedData = useLoaderData()
//    console.log(lodedData);

    const handleUpdate = event => {
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const myData = {name, email, password}
        // console.log(myData);
        fetch(`http://localhost:5000/users/${lodedData._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("Data Updated Successfully")
            }
        })
    }

    return (
        <div className="w-1/3 mt-12 mx-auto">
            <form onSubmit={handleUpdate}>
                <div className="bg-slate-300 p-4 rounded-md">
                    <input className="w-3/4 my-2 p-2 rounded-md" type="text" defaultValue={lodedData?.name} placeholder="Name" name="name" id=""  required/><br />
                    <input className="w-3/4 my-2 p-2 rounded-md" type="email" defaultValue={lodedData?.email} placeholder="Email" name="email" id=""  required/><br />
                    <input className="w-3/4 my-2 p-2 rounded-md" type="password" defaultValue={lodedData?.password} placeholder="Password" name="password" id="" required /><br />
                    <input className="btn btn-success" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;