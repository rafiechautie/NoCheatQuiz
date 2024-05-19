import React from 'react'
import HeaderLogin from '../../components/HeaderLogin'
import Form from '../../components/Form'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import AuthenticationImage from '../../../public/authentication.jpg';
import Footer from '../../components/Footer'

const RegisterPage = () => {
    const handleLogin = (data) => {
        console.log(data)
    }
  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="flex w-full max-w-4xl">
                    {/* Left side - Image */}
                    <div className="hidden lg:block w-1/2 bg-cover" style={{ backgroundImage: `url(${AuthenticationImage})` }}>
                    </div>
                    {/* Right side - Form */}
                    <div className="w-full lg:w-1/2 p-8 space-y-8 bg-white">
                        <Form onSubmit={handleLogin} className="space-y-6">
                            <InputField name="fullName" placeholder="Full Name" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                            <InputField name="email" type="email" placeholder="Email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                            <InputField name="password" type="password" placeholder="Password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                            <InputField name="confirmationPassword" type="password" placeholder="Confirm Password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                            <select className="block w-full mt-3 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="">Register as...</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select>
                            <Button className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Register</Button>
                        </Form>
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default RegisterPage