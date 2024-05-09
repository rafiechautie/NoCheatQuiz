import Button from "../../components/Button";
import Form from "../../components/Form";
import HeaderLogin from "../../components/HeaderLogin";
import InputField from "../../components/InputField";

const LoginPage = () => {
    const handleLogin = (data) => {
        console.log(data)
    }
    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="w-full max-w-md p-8 space-y-8 border rouded-lg shadow-lg bg-white">
                    <HeaderLogin 
                        heading="Login to your account"
                        paragraph="Don't have an account yet?"
                        linkName="Sign Up"
                        linkUrl="/register"
                    />
                    <Form onSubmit={handleLogin} className="mt-8 space-y-6">
                        <InputField name="email" type="email" placeholder="Email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 foucs:z-10 sm:text-sm"/>
                        <InputField name="password" type="password" placeholder="Password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                        <Button className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md">Login</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;