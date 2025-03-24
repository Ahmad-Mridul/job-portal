import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/lotties/register.json"
import { NavLink } from "react-router";
import { AuthContext } from "../utility/AuthProvider";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    const {signInUser,signInWithGoogle} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err.message);
        })
    }
    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex">
                <div className="w-96">
                    <Lottie animationData={groovyWalkAnimation} />;
                </div>
                <div className="card bg-base-100 w-full   shadow-2xl">
                    <div className="card-body">
                        <p className="card-title">Login now</p>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={signInWithGoogle} className="btn btn-ghost text-xl border-blue-500"><FaGoogle className="text-blue-500"/> Login with Google</button>
                        <div>
                            <p>Don't have an account? <NavLink to="/register" className="link link-hover">Register</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
