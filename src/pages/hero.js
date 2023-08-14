import {BsHearts,BsHeartPulseFill} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

export const Hero = ({heading,message}) => {
  const loginFirst=()=>{
   
    alert("Login/Register First To Continue");

  };

  return (
    <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
        {/*overlay*/}
        <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-[2]'/>
        <div className=' p-5 text-white z-[2]  mt-[-10rem]'>

        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
        </div> */}
            <h2 className='text-5xl font-bold hover:scale-105 duration-300'>{heading}</h2> 
            <p className='py-5 text-xl hover:scale-105 duration-300'>{message}</p>
            
              <button className='px-8 py-2 border hover:scale-125 duration-300' onClick={loginFirst} >
                 Find Your Friends
              </button>
             

        </div>
    </div>
  );
};