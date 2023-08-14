import { useState } from "react";
import axios from "axios";
import {useCookies} from "react-cookie"
import { useNavigate } from "react-router-dom";
export const Auth=()=>{
    return (
        <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover purple'>
        
        <Login/>
        <Register />
        {/* <div className='backdrop-blur-sm bg-white/30 max-w-[600px] m-auto border shadow-lg p-3 w-full my-2 drop-shadow-2xl hover:scale-105 duration-300 hover:shadow-indigo-400'>
            <button>Sign With Google To Continue</button>
        </div> */}
        </div>
        
);};
const Login=()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [_,setCookies] =useCookies(["access_token"]);
    const navigate=useNavigate();
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response =  await axios.post("https://friend-finder-app.onrender.com/auth/login",{
                username,
                password,
            });

            setCookies("access_token",response.data.token);
            window.localStorage.setItem("userID",response.data.userID);
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
    };

    return(
        <Form 
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Login"
        onSubmit={onSubmit}
        />
        );
};
const Register=()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            await axios.post("https://friend-finder-app.onrender.com/auth/register",{
                username,
                password,
            });
            alert("Registration Completed");
        }catch(err){
            console.error(err);
        }
    };
    return(
    <Form 
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    label="Register"
    onSubmit={onSubmit}
    />
    );
};
const Form = ({username,setUsername,password,setPassword,label,onSubmit})=>{
    return(
        <div className="auth-container max-w-[1240px] m-auto p-4 h-screen ">
            <form  className='max-w-[600px] m-auto' onSubmit={onSubmit}>
                <h2 className='text-4xl font-bold text-center p-4 underline underline-offset-8'>{label}</h2>
                <div className="form-group">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input className='border shadow-lg p-3 w-full my-2 hover:scale-105 duration-300 border-red-600' type="text" id="username" value={username} placeholder="Username"
                     onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">Password:</label> */}
                    <input className='border shadow-lg p-3 w-full my-2 hover:scale-105 duration-300 border-red-600' type="password" id="password" value={password} placeholder="Password:"
                    onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button className='backdrop-blur-sm bg-white/30 max-w-[600px] m-auto border shadow-lg p-3 w-full my-2 drop-shadow-2xl hover:scale-105 duration-300 hover:shadow-indigo-400' type="submit">{label}</button>
            </form>
        </div>
    );
};