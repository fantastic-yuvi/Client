import { useState } from "react";
import { useLocation} from "react-router-dom";
import {FaChevronDown} from 'react-icons/fa';
import {FriendList} from "./friendList";
import {Footer} from "./footer";
export const LandingPage=(props)=>{
    const location=useLocation();
    const username=location.state.username;
    const givealert=()=>{
        alert("Scroll Down Man this Button is Under Maintainence")
    };

    //Execution After Find Button 
    const [show,setshow] = useState({
        visible:false,
        result:{}
    });

    const current_user = {username};

    const find_people = async(event)=> {
        event.preventDefault();
        if(show.visible) {
            setshow({result:{} , visible:false});
            return ;
        }

        const userdata = await fetch("https://friend-finder-app.onrender.com/getuserdata",{
            method:"POST",
            body:JSON.stringify(current_user),
            headers: {
                "Content-Type":"application/json"
            }
        });

        var user_data = await userdata.json();

        const response = await fetch("https://friend-finder-app.onrender.com/fetchdata",{
            method:"POST",
            body:JSON.stringify(user_data[0]),
            headers: {
                "Content-Type":"application/json"
            }
        });
        const res_result = await response.json();
        setshow({visible:true, result:res_result});
        // console.log(res_result);
    };
    return(
        <div>
            <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
                {/*overlay*/}
                <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-[2]'/>
                <div className=' p-5 text-white z-[2]  mt-[-10rem]'>

                <div className='flex justify-center items-center'>
                </div>
                    <h2 className='text-5xl font-bold hover:scale-105 duration-300'>Fevi-Call</h2> 
                    <p className='py-5 text-xl hover:scale-105 duration-300'>Keeping Moments Alive and People Closer 💘</p>
                    <h1 >Welcome Back</h1>
                    <h2 className='text-5xl text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  font-bold hover:scale-105 duration-300  '>
                        {username} </h2>
                    {/* <button className='px-8 py-2 border hover:scale-125 duration-300'>
                       Scroll 
                    </button> */}
                    <div class='mx-auto p-8 '>
                    <FaChevronDown class= "animate-bounce text-red-500 hover:text-blue-500 mx-auto text-3xl " onClick={givealert}/> 
                    </div>
                </div>
                
            </div>
            <div className="flex items-center justify-center">
                    <h2 className="p-20 text-7xl font-bold  text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 underline  underline-offset-8  decoration-purple-500 ">
                        Find Your Friends Here</h2>
                    
            </div>
            <div className="flex justify-center items-center">
                <button onClick={find_people} className="text-xl font-semibold bg-gradient-to-r from-purple-600 text- to-cyan-600 text-white px-16 py-2 border-4 border-black rounded-md ml-8 hover:scale-105 duration-300">
                    {show.visible ? "👀Hide" : "🎾Find"}
                </button>
            </div>
            { show.visible && <FriendList act={show.result}/> }
            

            {/* Cards Start */}
            
            <Footer/>
        </div>
    );
};