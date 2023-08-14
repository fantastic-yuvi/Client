import { ShowDetails } from "./showDetails";
import React from "react";
export const FriendList=(props)=>{
    return(
        <div>
            
             <h1 className=" text-4xl py-16 font-bold justify-center  text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Results We Found :</h1>
             <div className='w-full py-[10rem] px-4 bg-white'>
                   <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'">
                   {props.act.map(elem=>{
                return <div key={elem[1]._id}>
                    <ShowDetails username={elem[1].userid}
                    name={elem[1].name}
                    age={elem[1].age}
                    gender={elem[1].gender}
                    email={elem[1].email}
                    instagram={elem[1].instagram_id}
                    linkedin={elem[1].linkedin_id}
                    artist={elem[1].artist}
                    course={elem[1].course}  
                    branch={elem[1].branch}
                    food={elem[1].food} 
                    movie={elem[1].movie}
                    song={elem[1].song}
                    sport={elem[1].sport}
                    hobbies={elem[1].hobbies}
                    img_url={elem[1].img_url}
                />
                </div> 
            })}
            </div>
        </div>
        </div>
    );
};