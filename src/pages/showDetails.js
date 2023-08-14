import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
// Importing Boys Avatar
import b1 from "../media/faces/b1.jpg";
import b2 from "../media/faces/b2.jpg";
import b3 from "../media/faces/b3.jpg";
import b4 from "../media/faces/b4.jpg";
// Importing Girls Avatar
import g1 from "../media/faces/g1.jpg";
import g2 from "../media/faces/g2.jpg";
import g3 from "../media/faces/g3.jpg";
import g4 from "../media/faces/g4.jpg";
// Default Avatar
import def from "../media/faces/b5.jpg";

export const ShowDetails = (props) => {
  const url = props.img_url;
  const profile = 
  url === "b1" ? b1 :
  url === "b2" ? b2 :
  url === "b3" ? b3 :
  url === "b4" ? b4 :
  url === "g1" ? g1 :
  url === "g2" ? g2 :
  url === "g3" ? g3 :
  url === "g4" ? g4 :
  def ;
  
  return (
    <div>
      <div className="w-full py-20">
        <div className="flex flex-col justify-center  hover:shadow-rose-600 max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5">
          <div className="">
            <img
              className="w-32 mx-auto shadow-xl shadow-zinc-600/60 rounded-full drop-shadow-sm "
              src={profile}
              alt="profile face"
            />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl  sm:text-2xl font-semibold text-gray-900 hover:text-pink-600">
              {props.name}
            </p>
            <p className="text-xs font-bold sm:text-base hover:text-pink-600  pt-2 pb-4 px-5 w-auto inline-block border-b-2">
              <span className="font-sans ">{props.age}</span> &nbsp;
              {props.gender}
            </p>
            <p className="text-left font-bold">
              {" "}
              Username: <span className="text-red-600">@{props.username}</span>
            </p>
            <p className="text-left"> Course : {props.course} </p>
            <p className="text-left"> Branch : {props.branch} </p>
            <p className="text-left"> Food : {props.food} </p>
            <p className="text-left"> Movie : {props.movie}</p>
            <p className="text-left"> Song : {props.song}</p>
            <p className="text-left"> Artist : {props.artist}</p>
            <p className="text-left"> Hobbies :{props.hobbies}</p>
            <p className="text-left"> Sport : {props.sport}</p>

            <div className="flex align-center justify-center mt-4">
              <a
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
                href={props.instagram}
              >
                <BsInstagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                href={props.linkedin}
              >
                <BsLinkedin />
                <span className="sr-only">Linkedin</span>
              </a>
              <a
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
                href={props.email}
              >
                <FaRegEnvelope />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
