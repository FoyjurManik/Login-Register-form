import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";



const Register = () => {
    const auth = getAuth(app);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);

        // password length validation
        if(password.length <6){
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        // upper case validation
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have at least one upper case characters')
            return;
        }
        // terms & conditions validation
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions!')
            return;
        }
        // reset error and success
        setRegisterError('');
        setSuccess('');

        // Create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            setSuccess('User Create Successfully.')

         // Update profile
         updateProfile(result.user,{
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
         })
         .then(() => console.log('profile updated'))
         .catch()
         
         // send verification email:
         sendEmailVerification(result.user)
         .then(() =>{
            alert('please check your email and verify your account')
         })
        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message);
        })
    }
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className=" bg-gray-200 mb-4 w-full py-2 px-4 " type="text" name="name" placeholder="Your Name" id="" required />
                    <input className=" bg-gray-200 mb-4 w-full py-2 px-4 " type="email" name="email" placeholder="Email Address" id="" required />
                    <div className="relative">
                    <input className="bg-gray-200 mb-4 w-full py-2 px-4 " type={ showPassword ? "text" : "password" }name="password" placeholder="Password" id="" required />
                    <span className="absolute top-3 right-2" onClick={()=>setShowPassword(!showPassword)}>
                      {
                        showPassword? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                      }  
                    </span>
                    </div>
                    <div>
                        <input type="checkbox" name="terms" id="terms"/>
                        <lebel className="ml-2" htmlFor="terms">Accept our <a href="">Term and Conditions</a></lebel>
                    </div>
                    <input className="btn btn-secondary mb-4 w-full py-2 px-4 " type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p>Already have an account? please <Link to="/loginemail">Login</Link></p>         
            </div>
        </div>
    );
};

export default Register;