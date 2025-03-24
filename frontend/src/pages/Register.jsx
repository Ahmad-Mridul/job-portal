import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/lotties/register.json"
import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../utility/AuthProvider";
import { FaGoogle } from "react-icons/fa";
const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSUbmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then((userCredential) => {
            console.log(userCredential);
            
        })
        .catch((error) => {
            console.log(error.message);
            
        });
    };
    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex">
                <div className="card bg-base-100 w-full   shadow-2xl">
                    <div className="card-body">
                        <p className="card-title">Register now</p>
                        <form onSubmit={handleSUbmit}>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <div className="divider">OR</div>
                        <button className="btn btn-ghost text-xl border-blue-500"><FaGoogle className="text-blue-500"/> Register with Google</button>
                        <div>
                            <p>Already have an account? <NavLink to="/login" className="link link-hover">Login</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className="w-96">
                    <Lottie animationData={groovyWalkAnimation} />;
                </div>
            </div>
        </div>
    );
};

export default Register;
