import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your login logic here
    console.log('Login attempt:', formData);
    // TODO: Implement actual login functionality
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Sign in
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline focus:outline-none"
              >
                Sign up here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;