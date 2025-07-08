import { useNavigate } from 'react-router-dom';
import './signUPMain.css';
import { postData } from '../../services/api';
import { useState } from 'react';


function SignUPMain() {
    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };





    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Dummy API call
            const response = await postData('/users/signUP', formData);
            console.log('Login successful:', response.data);

            // Redirect to category 
            navigate('/category');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <div className='signup-container'>
            <form onSubmit={handleSubmit} className='login-form'>

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
                                value={formData.username}
                                onChange={handleChange}
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
                                value={formData.username}
                                onChange={handleChange}
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
                                value={formData.username}
                                onChange={handleChange}
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
            </form>
        </div>
    );
}

export default SignUPMain;
