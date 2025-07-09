import './signUPMain.css';


function SignUPMain() {



    return (
        <div className='signup-container'>


                <div className='signup-box'>


                    <div className='signup-header'>
                        Sign Up
                    </div>


                    <div className='input-group'>
                        <div className='input-label'>Name</div>
                        <div className='input-wrapper'>
                            <input
                                type="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div className='input-group'>
                        <div className='input-label'>Email</div>
                        <div className='input-wrapper'>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div className='input-group'>
                        <div className='input-label'>Password</div>
                        <div className='input-wrapper'>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div className='button-container'>
                        <div className=''>
                            <button type="submit" className='login-button'>Login</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default SignUPMain;
