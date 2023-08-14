import { Link, useNavigate } from "react-router-dom";
import  { useCookies } from "react-cookie";
import { AiOutlineMenu, AiOutlineClose ,AiFillHome} from 'react-icons/ai';
import {CiLogout} from 'react-icons/ci';
import {useState,useEffect} from 'react';
export const Navbar=()=>{

    const navigate=useNavigate();

    const [cookies,setCookies] = useCookies(["access_token"]);
    const logout=()=>{
        setCookies("access_token","");
        window.localStorage.removeItem("userID");
        navigate("/");
    };


    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
  
    const handleNav = () => {
      setNav(!nav);
    };
    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#ffffff');
            setTextColor('#000000');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

    return (
        <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link to='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            Friend Finder
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li>
            {
                !cookies.access_token?
                (   <>
                            <Link to="/">Home </Link>

                        <Link to="/authLogin" className="px-4"> Login </Link> 
                        <Link to="/authRegister"> Register</Link>
                    </>
                    
                ):
                (<button onClick={logout} className='bg-gradient-to-r from-purple-600 text- to-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8 hover:animate-pulse'>
                    <CiLogout/>  LogOut</button>)
            }
            
          </li>
          
          
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
          <li className='p-4 '>
            
            {
                !cookies.access_token?
                (   <>
                        <Link to="/">HOME</Link>
                        <Link to="/authLogin">Login</Link> 
                        <Link to="/authRegister">Register</Link>
                    </>
                    
                ):
                (<button onClick={logout} className='bg-gradient-to-r from-stone-900 text- to-rose-700 text-white px-4 py-2 border-none rounded-md ml-8 hover:animate-pulse'>
                    <CiLogout/>  LogOut</button>)
            }
            
          </li>
          
          </ul>
        </div>
      </div>
    </div>



        
    );
};
{/* <div className="navbar">
            <Link to="/"> Home</Link>
            <Link to="/create-recipe"> Create Recipe</Link>
            <Link to="/saved-recipes"> Saved recipes</Link>
            {
                !cookies.access_token?
                (   <>
                        <Link to="/authLogin">Login</Link> 
                        <Link to="/authRegister">Register</Link>
                    </>
                    
                ):
                (<button onClick={logout}>LogOut</button>)
            }
            


        </div> */}