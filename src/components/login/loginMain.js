//
// form kesay banatay hain.api call form se kesay kertay hain.call k bad redirect kesya 
// kertya hian sab is link main hai.
//ek input css main style ker k do
//ek button css mian style ker k do
// https://chatgpt.com/share/686b1ac9-eebc-8009-8600-0b27cfc4d4a0

import { useNavigate } from 'react-router-dom';
import './loginMain.css'
import { useState } from 'react';
import { postData } from '../../services/api';

function LoignMain() {


    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // {
    //     email:saad@gc.com
    //     password:123456
    // }




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Dummy API call
            const response = await postData('/users/login', formData);
            console.log('Login successful:', response.data);

            // Redirect to category 
            navigate('/category');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };



    return (
        <div className='login-main'>

            <div className='login-form-container'>

                <form onSubmit={handleSubmit} className='login-form'>

                    <div className='login-form-heading'>
                        Admin Login
                    </div>

                    <div className='email-container'>
                        <div className='email-heading'>
                            Email
                        </div>
                        <div >
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className='email-input'
                            />
                        </div>

                    </div>


                    <div className='password-container'>
                        <div className='password-heading'>
                            Password
                        </div>
                        <div >
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className='password-input'
                            />
                        </div>

                    </div>


                    <div className='button-container'>
                        <div>
                            <button type="submit" className='login-button'>Login</button>
                        </div>

                    </div>
                </form>

            </div>
        </div>

    );
}

export default LoignMain;

