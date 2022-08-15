import Layout from "../../src/components/Layout/Layout"

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

Login.getLayout = function getLayout(page) {
    return <Layout pageTitle="Login">{page}</Layout>
}

export default Login
