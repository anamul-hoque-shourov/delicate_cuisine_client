import React from 'react';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 border shadow-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center">Register a profile</h1>
            <div className="card-body">
                <form className="fieldset">
                    <label className="label">Profile Name</label>
                    <input name="name" type="text" className="input" placeholder="Enter your name" />

                    <label className="label">Profile Picture</label>
                    <input name="photo" type="text" className="input" placeholder="Enter your photo url" />

                    <label className="label">Profile Email</label>
                    <input name="email" type="email" className="input" placeholder="Enter your email" />

                    <label className="label">Profile Password</label>
                    <input name="password" type="password" className="input" placeholder="Enter a password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;