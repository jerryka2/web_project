import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const Login = () => {

    const { backendUrl, token, setToken } = useContext(AppContext)

    const [state, setState] = useState('Sign Up');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {

            if (state === 'Sign Up') {

                const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }

            } else {

                const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }

            }

        } catch (error) {
            toast.error(error.message)

        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                {/* ======= Heading ======= */}
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                    {state === 'Sign Up' ? 'Join Us Today!' : 'Welcome Back!'}
                </h2>
                <p className="text-gray-600 text-center mt-3 text-lg">
                    {state === 'Sign Up'
                        ? "Create an account to access our EV charging network and book your first session effortlessly."
                        : "Log in to continue and charge up with ease."}
                </p>

                {/* ======= Form Inputs ======= */}
                {state === "Sign Up" && (
                    <div className="mt-6">
                        <label className="text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-1"
                        />
                    </div>
                )}

                <div className="mt-4">
                    <label className="text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-1"
                    />
                </div>

                <div className="mt-4">
                    <label className="text-gray-700 font-medium">Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-1"
                    />
                </div>

                {/* ======= Submit Button ======= */}
                <button type='submit' className="mt-6 w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition transform hover:scale-105">
                    {state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                {/* ======= Toggle Between Login & Sign Up ======= */}
                <p className="text-center text-gray-600 mt-4">
                    {state === "Sign Up"
                        ? "Already have an account?"
                        : "New to our platform?"}
                    <span
                        className="text-green-500 font-semibold cursor-pointer hover:underline ml-1"
                        onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                    >
                        {state === "Sign Up" ? "Login here" : "Sign up here"}
                    </span>
                </p>
            </div>
        </form>
    );
};

export default Login;
