import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {Footer} from "./footer";

export const AuthLogin=()=>{
    return (
        <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover purple'>
                <Login/>
        </div>
    );
};
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
            // console.log(response.data);
            const msg=response.data.message;
            if(msg){
                alert("Wrong Username Or Password");
                return;
            }
            setCookies("access_token",response.data.token);
            window.localStorage.setItem("userID",response.data.userID);
            navigate("/landingPage",{state:{username}});
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
const Form = ({username,setUsername,password,setPassword,label,onSubmit})=>{
    return(
       <div>
        <div className="auth-container flex items-center  max-w-[1240px] m-auto p-4 h-screen ">
            <form  className='max-w-[600px] m-auto' onSubmit={onSubmit}>
                <h2 className='text-4xl font-bold text-center p-4 underline underline-offset-2'>{label}</h2>
                <h4 className="text-sm">Welcome</h4>
                <div className="form-group">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input className='border shadow-lg p-3 w-full  rounded-lg my-2 hover:scale-105 duration-300 border-purple-600' type="text" id="username" value={username} placeholder="Username"
                     onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">Password:</label> */}
                    <input className='border shadow-lg p-3 w-full my-2 rounded-lg hover:scale-105 duration-300 border-purple-600' type="password" id="password" value={password} placeholder="Password:"
                    onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button className='shadow-indigo-500/50 backdrop-blur-sm bg-white/30 max-w-[600px] m-auto border rounded-full shadow-lg p-3 w-full my-2 drop-shadow-2xl hover:scale-105 duration-300 hover:shadow-blue-400' type="submit">{label}</button>
            </form>
        </div>
        <Footer/>
        </div>
    );
};