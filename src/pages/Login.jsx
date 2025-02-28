import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const Login = () => {
    const { backendUrl, token, setToken } = useContext(AppContext);
    const navigate = useNavigate();

    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    // ✅ Redirect if user is already logged in
    useEffect(() => {
        if (token) {
            console.log("🔹 User already logged in, redirecting...");
            navigate('/');
        }
    }, [token]); // ✅ Dependency ensures it only runs when `token` changes

    // ✅ Toggle between Sign Up & Login
    const toggleState = () => {
        setState(state === 'Sign Up' ? 'Login' : 'Sign Up');
        setName(''); // ✅ Reset name field when switching
    };

    // ✅ Form Submission Handler
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            let response;
            if (state === 'Sign Up') {
                console.log("📡 Signing Up:", { name, email, password });
                response = await axios.post(`${backendUrl}/api/user/register`, { name, password, email });
            } else {
                console.log("📡 Logging In:", { email, password });
                response = await axios.post(`${backendUrl}/api/user/login`, { password, email });
            }

            const { data } = response;
            console.log("✅ Server Response:", data);

            if (data.success) {
                const token = data.token;
                console.log("✅ Received Token:", token);

                localStorage.setItem('token', token); // ✅ Store token properly
                setToken(token);
                toast.success(data.message);

                setTimeout(() => {
                    navigate('/');
                }, 500);
            } else {
                console.warn("❌ Server Error:", data.message);
                toast.error(data.message);
            }
        } catch (error) {
            console.error("❌ Auth Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Server unavailable, please try again later"); // ✅ Generic error handling
        } finally {
            setLoading(false);
        }
    };

    // ✅ Prevent rendering login form if user is already logged in
    if (token) {
        return null;
    }

    return (
        <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl">
                {/* 🔹 Heading */}
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                    {state === 'Sign Up' ? 'Join Us Today!' : 'Welcome Back!'}
                </h2>
                <p className="text-gray-600 text-center mt-3 text-lg">
                    {state === 'Sign Up'
                        ? "Create an account to access our EV charging network and book your first session effortlessly."
                        : "Log in to continue and charge up with ease."}
                </p>

                {/* 🔹 Full Name Input (Only for Sign Up) */}
                {state === "Sign Up" && (
                    <div className="mt-6">
                        <label className="text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-1 transition-all"
                        />
                    </div>
                )}

                {/* 🔹 Email Input */}
                <div className="mt-4">
                    <label className="text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-1 transition-all"
                        autoComplete="email"
                    />
                </div>

                {/* 🔹 Password Input */}
                <div className="mt-4">
                    <label className="text-gray-700 font-medium">Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-1 transition-all"
                        autoComplete={state === 'Sign Up' ? "new-password" : "current-password"} // ✅ Improves security
                    />
                </div>

                {/* 🔹 Submit Button */}
                <button
                    type='submit'
                    disabled={loading}
                    className={`mt-6 w-full text-white py-3 rounded-md font-semibold transition-all duration-300 transform 
                        ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 hover:scale-105'}`}
                >
                    {loading ? "Processing..." : state === 'Sign Up' ? 'Create Account' : 'Login'}
                </button>

                {/* 🔹 Toggle Between Login & Sign Up */}
                <p className="text-center text-gray-600 mt-4">
                    {state === "Sign Up"
                        ? "Already have an account?"
                        : "New to our platform?"}
                    <span
                        className="text-green-500 font-semibold cursor-pointer hover:underline ml-1 transition-all"
                        onClick={toggleState} // ✅ Function for toggling state
                    >
                        {state === "Sign Up" ? "Login here" : "Sign up here"}
                    </span>
                </p>
            </div>
        </form>

    );
};

export default Login;
