import React from 'react';

export const Login = () => {
    return <div>
        <div className='container' >
            <h1>LOGIN</h1>
            <hr></hr>
            <label for="exampleFormControlInput1" class="form-label">UserName</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username.." />
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Password.." />

            <div className='lower-btn' >
                <button type="button" class="btn btn-success" >Login</button>
                <button type="button" class="btn btn-primary" style={{ marginLeft: 10 }}>Register</button>
            </div>
        </div>
    </div>;
};
