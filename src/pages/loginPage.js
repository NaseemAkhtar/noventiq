import React, {lazy, Suspense} from "react";

const Header = lazy(()=> import('../components/header'))
const Footer = lazy(()=> import('../components/footer'))
const UserLoginForm  = lazy(()=> import('../components/userLoginForm'))

const LoginPage = ()=>{
    return(<>
        <Suspense fallback={<h1>Loading....</h1>}>
            <Header/>
            <UserLoginForm/>
            <Footer/>
        </Suspense>
    </>)
}

export default LoginPage