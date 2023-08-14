import { useState } from "react";
import Select from 'react-select';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import {Footer} from "./footer";

// Importing Boys Avatar
import b1 from "../media/faces/b1.jpg";
import b2 from "../media/faces/b2.jpg";
import b3 from "../media/image.jpg";
import b4 from "../media/faces/b4.jpg";
// Importing Girls Avatar
import g1 from "../media/faces/g1.jpg";
import g2 from "../media/faces/g2.jpg";
import g3 from "../media/faces/g3.jpg";
import g4 from "../media/faces/g4.jpg";
export const UserDetail=(props)=>{
    const navigate=useNavigate();
    const location=useLocation();
    const username=location.state.username;
    const password=location.state.password;

    // console.log(location.state.password);
    const [userdetails,changeUserdetails] = useState({
        userid:username,
        name:"",
        age:"",
        course:"",
        branch:"", 
        lang:"",
        food:"",
        movie:"",
        song:"",
        artist:"",
        hobbies:"",
        sport:"",   
        gender:"",
        instagram_id:"",
        linkedin_id:"",
        email:"",
        img_url:""
    });

    // Course Names.
    const course_options = [
        { value: 'course', label: 'B.Tech' , id:"B.Tech" },
        { value: 'course', label: 'BCA' , id:"BCA"},
        { value: 'course', label: 'BSC' , id:"BSC" }
    ];

    // Branches with there specific course.
    const branch_options = 
        userdetails.course === 'B.Tech'? [ 
            {value: 'branch', label: 'CS' , id:"CS" },
            { value: 'branch', label: 'ECE' , id:"ECE" },
            { value: 'branch', label: 'EN' , id:"EN" } ]: 
        userdetails.course === 'BCA' ? [
            { value:"branch" , label: 'Computer Application' , id:"Computer Application"}
        ]:
        userdetails.course === 'BSC' ? [
            { value:"branch" , label: 'Computer Application' , id:"Computer Application"},
            { value:"branch" , label: 'Maths' , id:"Maths"},
            { value:"branch" , label: 'Physics' , id:"Physics"}
        ]:[];
        
    // Language List
    const lang_options = [
        {value:"lang" , label:'C++' , id:"C++"},
        {value:"lang" , label:'Python' , id:"Python"},
        {value:"lang" , label:'Java' , id:"Java"},
    ];
    
    // Food List
    const food_options = [
        {value:"food" , label:'Spanish' , id:"Spanish"},
        {value:"food" , label:'Italian' , id:"Italian"},
        {value:"food" , label:'Chinese' , id:"Chinese"},
        {value:"food" , label:'Indian' , id:"Indian"},
        {value:"food" , label:'Vegetarian' , id:"Vegetarian"},
        {value:"food" , label:'Non-Vegetarian' , id:"Non-vegetarian"},
    ];

    // Movie List
    const movie_options = [
        {value:"movie" , label:'Rom/Com' , id:"Rom/Com"},
        {value:"movie" , label:'Drama' , id:"Drama"},
        {value:"movie" , label:'Crime/Thriller' , id:"Crime/Thriller"},
        {value:"movie" , label:'Horror/Suspense' , id:"Horror/Suspense"},
        {value:"movie" , label:'Action/Thriller' , id:"Action/Thriller"},
        {value:"movie" , label:'Fantasy/Adventure' , id:"Fantasy/Adventure"},
        {value:"movie" , label:'SciFi/Fiction' , id:"SciFi/Fiction"}
    ];

    // Song List
    const song_options = [
        {value:"song" , label:'Pop' , id:"Pop"},
        {value:"song" , label:'Rap' , id:"Rap"},
        {value:"song" , label:'Love' , id:"Love"},
        {value:"song" , label:'Spanish' , id:"Spanish"},
        {value:"song" , label:'Country' , id:"Country"},
        {value:"song" , label:'Feel Good' , id:"Feel Good"},
        {value:"song" , label:'Hindi classics' , id:"Hindi classics"},
        {value:"song" , label:'Rock' , id:"Rock"},
        {value:"song" , label:'Romantic' , id:"Romantic"},
        {value:"song" , label:'Hip Hop' , id:"Hip Hop"}
    ];
    //Artist List
    const artist_options=
    userdetails.song === 'Pop'? [ 
        {value: 'artist', label: 'Justin Beiber' , id:"Justin Beiber" },
        {value: 'artist', label: 'Shawn Mendes' , id:"Shawn Mendes" },
        {value: 'artist', label: 'The Weekend' , id:"The Weekend" },
        {value: 'artist', label: 'Khalid' , id:"Khalid" },
        {value: 'artist', label: 'Ariana Grande' , id:"Ariana Grande" },
        {value: 'artist', label: 'Taylor Swift' , id:"Taylor Swift" },
        {value: 'artist', label: 'Ed Sheeran' , id:"Ed Sheeran" },
        {value: 'artist', label: 'Justin Timberlake' , id:"Justin Timberlake" },
        { value: 'artist', label: 'One Direction' , id:"One Direction" },
        { value: 'artist', label: 'Dua lipa' , id:"Dua lipa" },
        {value: 'artist', label: 'Coldplay' , id:"Coldplay" },
        {value: 'artist', label: 'Katy Perry' , id:"Katy Perry" }]: 
    userdetails.song === 'Rap' ? [
        { value:"artist" , label: 'Eminem' , id:"Eminem"},
        { value:"artist" , label: 'Drake' , id:"Drake"},
        { value:"artist" , label: 'Ludacris' , id:"Ludacris"},
        { value:"artist" , label: 'Lil wayne' , id:"Lil wayne"},
        { value:"artist" , label: 'G-Eazy' , id:"G-Eazy"},
        { value:"artist" , label: 'Nicki Minaj' , id:"Nicki Minaj"},
        { value:"artist" , label: 'Yo Yo Honey Singh' , id:"Yo Yo Honey Singh"},
        { value:"artist" , label: 'King' , id:"King"},
        { value:"artist" , label: 'Dino James' , id:"Dino James"},
        { value:"artist" , label: 'Carry Minati' , id:"Carry Minati"},
        { value:"artist" , label: 'KR$NA' , id:"KR$NA"}
    ]:
    userdetails.song === 'Love' ? [
        { value:"artist" , label: 'Ed sheeran' , id:"Ed sheeran"},
        { value:"artist" , label: 'Taylor Swift' , id:"Taylor Swift"},
        { value:"artist" , label: 'Christina Perri' , id:"Christina Perri"},
        { value:"artist" , label: 'Backstreet Boys' , id:"Backstreet Boys"},
        { value:"artist" , label: 'Alka Yagnik' , id:"Alka Yagnik"},
        { value:"artist" , label: 'Shreya Goshal' , id:"Shreya Goshal"},
        { value:"artist" , label: 'Atif Aslam' , id:"Atif Aslam"},
        { value:"artist" , label: 'Arijit singh' , id:"Arijit singh"},
        { value:"artist" , label: 'Jubin Nautiyal' , id:"Jubin Nautiyal"},
        { value:"artist" , label: 'KK' , id:"KK"},
        { value:"artist" , label: 'Mohit Chauhan' , id:"Mohit Chauhan"},
        { value:"artist" , label: 'Armaan Malik' , id:"Armaan Malik"},
        { value:"artist" , label: 'Darshan Raval' , id:"Darshan Raval"}
    ]: 
    userdetails.song === 'Spanish' ?[
        { value:"artist" , label: 'Enrique Iglesias' , id:"Enrique Iglesias"},
        { value:"artist" , label: 'Shakira' , id:"Shakira"},
        { value:"artist" , label: 'Daddy Yankee' , id:"Daddy Yankee"},
        { value:"artist" , label: 'Luis Fonsi' , id:"Luis Fonsi"},
        { value:"artist" , label: 'Jennifer Lopez' , id:"Jennifer Lopez"}
    ]:
    userdetails.song === 'Country' ? [
        { value:"artist" , label: 'Blake Shelton' , id:"Blake Shelton"},
        { value:"artist" , label: 'Chase Wright' , id:"Chase Wright"},
        { value:"artist" , label: 'Luke Bryan' , id:"Luke Bryan"},
        { value:"artist" , label: 'Luke Combs' , id:"Luke Combs"},
        { value:"artist" , label: 'Dylan Scott' , id:"Dylan Scott"}
    ]:
    userdetails.song === 'Feel Good' ?[
        { value:"artist" , label: 'Avicii' , id:"Avicii"},
        { value:"artist" , label: 'Martin Garrix' , id:"Martin Garrix"},
        { value:"artist" , label: 'Kygo' , id:"Kygo"},
        { value:"artist" , label: 'ColdPlay' , id:"ColdPlay"},
        { value:"artist" , label: 'Dj Snake' , id:"Dj Snake"},
        { value:"artist" , label: 'Alan Walker' , id:"Alan Walker"},
        { value:"artist" , label: 'David guetta' , id:"David guetta"},
        { value:"artist" , label: 'The Chainsmokers' , id:"The Chainsmokers"}
    ]:
    userdetails.song === 'Hindi classics' ? [
        { value:"artist" , label: 'Lata Mangeshkar' , id:"Lata Mangeshkar"},
        { value:"artist" , label: 'Mohammed Rafi' , id:"Mohammed Rafi"},
        { value:"artist" , label: 'Kishore Kumar' , id:"Kishore Kumar"},
        { value:"artist" , label: 'Udit Narayan' , id:"Udit Narayan"},
        { value:"artist" , label: 'Alka Yagnik' , id:"Alka Yagnik"},
        { value:"artist" , label: 'Rahat Fateh Ali Khan' , id:"Rahat Fateh Ali Khan"}

    ]:
    userdetails.song === 'Rock' ? [
        { value:"artist" , label: 'Ac/Dc' , id:"Ac/Dc"},
        { value:"artist" , label: 'Aerosmith' , id:"Aerosmith"},
        { value:"artist" , label: 'Artic Monkeys' , id:"Artic Monkeys"},
        { value:"artist" , label: 'Coldplay' , id:"Coldplay"},
        { value:"artist" , label: 'Kaleo' , id:"Kaleo"},
        { value:"artist" , label: 'The Beatles' , id:"The Beatles"}

    ]:
    userdetails.song === 'Romantic' ?[
        { value:"artist" , label: 'Ed sheeran' , id:"Ed sheeran"},
        { value:"artist" , label: 'Taylor Swift' , id:"Taylor Swift"},
        { value:"artist" , label: 'Christina Perri' , id:"Christina Perri"},
        { value:"artist" , label: 'Backstreet Boys' , id:"Backstreet Boys"},
        { value:"artist" , label: 'Alka Yagnik' , id:"Alka Yagnik"},
        { value:"artist" , label: 'Shreya Goshal' , id:"Shreya Goshal"},
        { value:"artist" , label: 'Atif Aslam' , id:"Atif Aslam"},
        { value:"artist" , label: 'Arijit singh' , id:"Arijit singh"},
        { value:"artist" , label: 'Jubin Nautiyal' , id:"Jubin Nautiyal"},
        { value:"artist" , label: 'KK' , id:"KK"},
        { value:"artist" , label: 'Mohit Chauhan' , id:"Mohit Chauhan"},
        { value:"artist" , label: 'Armaan Malik' , id:"Armaan Malik"},
        { value:"artist" , label: 'Darshan Raval' , id:"Darshan Raval"}

    ]:
    userdetails.song === 'Hip Hop' ? [
        { value:"artist" , label: 'XXXTentacion' , id:"XXXTentacion"},
        { value:"artist" , label: 'The Kid LAROI' , id:"The Kid LAROI"},
        { value:"artist" , label: 'The Weekend' , id:"The Weekend"},
        { value:"artist" , label: 'Drake' , id:"Drake"},
        { value:"artist" , label: 'Eminem' , id:"Eminem"},
        { value:"artist" , label: 'Ludacris' , id:"Ludacris"},
        { value:"artist" , label: 'Post Malone' , id:"Post Malone"}
    ]:
    [];
    //Hobbies List
    const hobbies_options = [
        {value:"hobbies" , label:'Gaming' , id:"Gaming"},
        {value:"hobbies" , label:'Singing' , id:"Singing"},
        {value:"hobbies" , label:'Painting' , id:"Painting"},
        {value:"hobbies" , label:'Travel' , id:"Travel"},
        {value:"hobbies" , label:'Photography' , id:"Photography"},
        {value:"hobbies" , label:'Dancing' , id:"Dancing"},
        {value:"hobbies" , label:'Gym' , id:"Gym"},
        {value:"hobbies" , label:'Driving' , id:"Driving"}
    ];
    // Sport List 
    const sport_options = [
        {value:"sport" , label:'Cricket' , id:"Cricket"},
        {value:"sport" , label:'Football' , id:"Football"},
        {value:"sport" , label:'Badminton' , id:"Badminton"},
        {value:"sport" , label:'Basketball' , id:"Basketball"},
        {value:"sport" , label:'Vollyball' , id:"Vollyball"},
        {value:"sport" , label:'Kabaddi' , id:"Kabaddi"},
        {value:"sport" , label:'Kho-kho' , id:"Kho-kho"},
        {value:"sport" , label:'Table_Tennis' , id:"Table_Tennis"},
        {value:"sport" , label:'Hockey' , id:"Hockey"}
    ];

    // Gender List
    const gender_options = [
        {value:"gender" , label:"Male" , id:"Male"},
        {value:"gender" , label:"Female" , id:"Female"},
    ]
    
    const [photos,setphotos]=useState({
        check1:1,
        check2:1,
        check3:1,
        check4:1
    });
    const [girls,setgirls]= useState({
        girl1:1,
        girl2:1,
        girl3:1,
        girl4:1
    });
    // const [check,setcheck]=useState(1);
    //Function to set image name.
    const select_img = (b1)=> {
        b1.preventDefault();
        
        var url = b1.target.id;
        var img_loc = url;

        if(img_loc==="b1"){
            setphotos({
                check1:0,
                check2:1,
                check3:1,
                check4:1
            })
        }else if(img_loc==="b2"){
            setphotos({
                check1:1,
                check2:0,
                check3:1,
                check4:1
            })
        }else if(img_loc==="b4"){
            setphotos({
                check1:1,
                check2:1,
                check3:0,
                check4:1
            })
        }else if (img_loc==="im"){
            setphotos({
                check1:1,
                check2:1,
                check3:1,
                check4:0
            })
        }
        else if(img_loc==="g1"){
            setgirls({
                girl1:0,
                girl2:1,
                girl3:1,
                girl4:1
            })
        }else if(img_loc==="g2"){
            setgirls({
                girl1:1,
                girl2:0,
                girl3:1,
                girl4:1
            })
        }else if(img_loc==="g3"){
            setgirls({
                girl1:1,
                girl2:1,
                girl3:0,
                girl4:1
            })
        }else if(img_loc==="g4"){
            setgirls({
                girl1:1,
                girl2:1,
                girl3:1,
                girl4:0
            })
        }
        else{

        }
        changeUserdetails({
            ...userdetails , img_url:img_loc
        })
    }

    //Function that return select operation on image.
    function setAvatar() {
        if(userdetails.gender === 'Male') {
            //Avatar belong to Boys.
            return <div className="w-full  max-w-6xl  grid grid-cols-4 gap-6 ">
                {
                    photos.check1 ?<button onClick={select_img} name="b1" id="b1"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="b1" src={b1}></img></button>:
                     <button onClick={select_img} name="b1" id="b1"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={b1}></img></button>
                }
                {
                    photos.check2 ?<button onClick={select_img} name="b2" id="b2"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="b2" src={b2}></img></button>
                    : <button onClick={select_img} name="b2" id="b2"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={b2}></img></button>

                }
                {
                    photos.check4 ?<button onClick={select_img} name="b3" id="b3"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="b3" src={b3}></img></button>
                    : <button onClick={select_img} name="b3" id="b3"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={b3}></img></button>

                }
                {
                    photos.check3 ?<button onClick={select_img} name="b4" id="b4"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="b4" src={b4}></img></button>
                    :<button onClick={select_img} name="b4" id="b4"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={b4}></img></button>

                }
            </div>
        }
        else if(userdetails.gender === "Female") {
            //Avatar belong to Girls.
            return <div className="w-full  max-w-6xl  grid grid-cols-4 gap-6" >
                {
                    girls.girl1?<button onClick={select_img} name="g1" id="g1"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="g1" src={g1}></img></button>
                    :<button onClick={select_img} name="g1" id="g1"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={g1}></img></button>

                }
                {
                    girls.girl2?<button onClick={select_img} name="g2" id="g2"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="g2" src={g2}></img></button>
                    :<button onClick={select_img} name="g2" id="g2"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={g2}></img></button>

                }
                {
                    girls.girl3?<button onClick={select_img} name="g3" id="g3"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="g3" src={g3}></img></button>
                    :<button onClick={select_img} name="g3" id="g3"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={g3}></img></button>

                }
                {
                    girls.girl4?<button onClick={select_img} name="g4" id="g4"><img className="rounded-full shadow-lg hover:shadow-rose-500" id="g4" src={g4}></img></button>
                    :<button onClick={select_img} name="g4" id="g4"><img className="rounded-full shadow-lg shadow-cyan-400 hover:shadow-rose-500" src={g4}></img></button>

                }
            </div>
        }
    }

    // Set Details of user on selection.
    const setdetails = (event) => {
        const key = event.value;
        const value = event.id;

        changeUserdetails({
            ...userdetails , [key] : value
        });
    }
    
    // Read Instagram and Linkedin details.
    const read_details = (event)=> {
        const value = event.target.value;
        const key = event.target.name;
        
        if(key === "age" && (value.length > 2 || value[value.length-1] === '-')) {
            return ;
        }

        changeUserdetails({
            ...userdetails , [key]:value
        })
    }

    // Validation 
    function all_field_check() {
        var check_form = true;
        for(var i in userdetails) {
            if(i === "instagram_id") continue;
            if(i === "linkedin_id") continue;    
            if(!userdetails[i]) {
                alert("Please Fill your "+i.toUpperCase()); 
                check_form = false;
                break;
            }
        }
        return check_form;
    }  
    
    // Submit Form and store in database.
    const formsubmit = async (event)=> {   
        //Registeration Data Api
        event.preventDefault();
        //Check reqired fields
        var required_fields = all_field_check();
        if(required_fields === false) {
            return ;
        }

        try{
            await axios.post("https://friend-finder-app.onrender.com/auth/register",{
                username,
                password,
            });
            alert("Registration Completed");
            
        }catch(err){
            console.error(err);
        }

        // if(userdetails.age.length > 0) {
        //     alert("Please Correct your age");
        // }

        //Form Submission Api
        const response = await fetch("https://friend-finder-app.onrender.com/userdetail",{
          method:"POST",
          body:JSON.stringify(userdetails),
          headers:{
            "Content-Type":'application/json'
          }
        })
        // const data = await response.json();
        navigate("/authLogin");
        alert("Succfully Submited");
    };

    return (
        <>
            <div className="max-w-[1240px] m-auto p-4 h-screen justify-center ">
            <h1 className="text-4xl font-bold text-center py-16 underline underline-offset-8">Choose The Best Possible Option </h1>
                <form className="p-8 border-rounded">
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your Name?
                        <div className="px-16 py-2 ">

                            <input className='border-2 shadow-lg  p-3 w-full my-2 text-rose-500 hover:scale-105 duration-300 shadow-rose-500 border-red-600' onChange={read_details} placeholder="Name" name="name" value={userdetails.name}></input>
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your Age?
                        <div className="px-16 py-2 ">
                            <input type="number"  min="0" max="100" className='font-sans border-2 shadow-lg  p-3 w-full my-2 text-rose-500 hover:scale-105 duration-300 shadow-rose-500 border-red-600' onChange={read_details} placeholder="Age" name="age" value={userdetails.age}></input>
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your Email?
                        <div className="px-16 py-2 ">
                            <input className='border-2 shadow-lg  p-3 w-full my-2 text-rose-500 hover:scale-105 duration-300 shadow-rose-500 border-red-600' onChange={read_details} placeholder="Email" name="email" value={userdetails.email}></input>
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your Instagram handle?
                        <div className="px-16 py-2 ">
                            <input className='border-2 shadow-lg  p-3 w-full my-2 text-rose-500 hover:scale-105 duration-300 shadow-rose-500 border-red-600' onChange={read_details} placeholder="Instagram ID" name="instagram_id" value={userdetails.instagram_id}></input>
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your Linkedin handle?
                        <div className="px-16 py-2 ">
                            <input className='border-2 shadow-lg  p-3 w-full my-2 text-rose-500 hover:scale-105 duration-300 shadow-rose-500 border-red-600' onChange={read_details} placeholder="Linkedin ID" name="linkedin_id" value={userdetails.linkedin_id}></input>
                        </div>
                    </div>
                    <div className= " py-4 text-2xl font-semibold"> 
                        Course
                        <div className="px-16 py-2 ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Course" options={course_options} />
                        </div>
                    </div>
                    <div className=" py-4 text-2xl font-semibold"> 
                        Branch
                        <div className="px-16 py-2  ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Branch" options={branch_options} />
                        </div>
                    </div>
                    <div className=" text-2xl font-semibold py-4"> 
                        What is your prefered Programming Language?
                        <div className="px-16 py-2 ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Language" options={lang_options} />
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your favourite Food?
                        <div className="px-16 py-2 "> 
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Food" options={food_options} />
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your favourite Movie?
                        <div className="px-16 py-2">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Movie" options={movie_options} />
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your favourite Song?
                        <div className="px-16 py-2 ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Song" options={song_options} />
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        Who is your favourite Artist?
                        <div className="px-16 py-2 ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Song" options={artist_options} />
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is Your Favourite Hobbies ?
                        <div className="px-16 py-2 ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Hobbie" options={hobbies_options} />
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your prefered Sport?
                        <div className="px-16 py-2 ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Sport" options={sport_options} />
                        </div>
                    </div>
                    <div className="py-4 text-2xl font-semibold"> 
                        What is your Gender?
                        <div className="px-16 py-2 ">
                            <Select className="shadow-lg shadow-blue-500 border-2 hover:shadow-rose-600" onChange={setdetails} placeholder="Click Here To Select Gender" options={gender_options} />
                        </div>
                    </div>
                    <div className="py-16 ">
                        {userdetails.gender && setAvatar()}
                    </div>
                    <button onClick={formsubmit} className=" bg-gradient-to-r from-purple-600 text- to-cyan-600 text-white px-16 py-2 border-2 rounded-md ml-8 hover:scale-105 duration-300">Submit</button>
                </form>
                <Footer/>
            </div>
        </>
    ); 
};
