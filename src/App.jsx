import { NavLink } from 'react-router-dom';
import './App.css'

function App() {

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    const myData = {name, email, password}
    // console.log(myData);
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(myData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        alert('Data insert successfully')
      }
    })
    // .then(error => console.log(error))
  }

  return (
    <>
    <div className='bg-slate-400 py-4 flex justify-center gap-9'>
      <NavLink className='btn btn-info' to='/'>Login</NavLink>
      <NavLink className='btn btn-success' to='/users'>Users</NavLink>
    </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col w-full mt-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
