import {useState} from 'react'

function Navbar() {

    const [toggle, setToggle] = useState(false);

    const changeToggle=()=>{
        setToggle(!toggle);
    }
  return (
    <div className='fixed w-full'>
        <div className='px-5 flex justify-between items-center bg-black text-white h-12'>
        <div className='flex font-bold cursor-default'>
            <img className='h-5 w-5 mx-2 my-auto' src="https://img.icons8.com/?size=512&id=104233&format=png" alt="" />
            <p className='my-auto'>ProjectPulse</p>
        </div>
        <div className='font-semibold max-md:hidden'>
            <div className='flex justify-center'>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>Home</div>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>about </div>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>contact us</div>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>explore</div>
            </div>
        </div>
        <div className='flex'> 
        <div className='md:hidden my-auto'>
            <button onClick={changeToggle} className='border border-gray-600 rounded-lg h-8 w-8 p-1 mx-2 transition duration-200 hover:scale-110'>
            <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#607D8B" d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"></path>
</svg>
            </button>
        </div>
        <div className='my-auto'>
            <a className='border-0 rounded-full ' href=""><svg className='h-10 w-10 transition duration-200 hover:scale-105' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#ede7f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#673ab7" d="M24,44c4.5,0,8.6-1.5,11.9-4c0,0,0,0,0,0c-0.6-7.6-8.2-9-8.2-9L24,31.8L20.3,31c0,0-7.6,1.4-8.2,9	C15.4,42.5,19.5,44,24,44z"></path><path fill="#ff9800" d="M28,31c0,0,0,4-4,4s-4-4-4-4"></path><path fill="#311b92" d="M24,37c3.1,0,5.6-2.3,5.9-5.3c-0.9-0.4-1.6-0.6-2-0.7c0,2.2-1.8,3.9-4,3.9c-2.2,0-4-1.8-4-3.9	c-0.4,0.1-1.1,0.3-2,0.7C18.4,34.7,20.9,37,24,37z"></path><path fill="#ef8d3c" d="M32,22.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5C31.3,21,32,21.7,32,22.5"></path><path fill="#ef8d3c" d="M19,22.5c0-0.8-0.7-1.5-1.5-1.5S16,21.7,16,22.5s0.7,1.5,1.5,1.5S19,23.3,19,22.5"></path><path fill="#ef8d3c" d="M28,31v-4h-8v4c0,0,0,4,4,4S28,31,28,31z"></path><path fill="#ffaa45" d="M31,18.7c0-5.9-14-3.8-14,0v4.4c0,3.8,3.1,6.9,7,6.9c3.9,0,7-3.1,7-6.9V18.7z"></path><path fill="#795548" d="M24,11c-4.9,0-8,4.3-8,8.2V21l2,2v-4l9.2-3l2.8,3v4l2-2v-0.8c0-3.2-0.8-6.8-4.8-7.6L26.4,11H24z"></path><path fill="#784719" d="M26,22c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S26,22.6,26,22"></path><path fill="#784719" d="M20,22c0,0.6,0.4,1,1,1s1-0.4,1-1s-0.4-1-1-1S20,21.4,20,22"></path>
    </svg></a>
        </div>
        </div>
        </div>
{ toggle && (
        <div className='absolute w-full bg-gray-900 text-white font-semibold md:hidden py-5'>
            <div className=''>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>Home</div>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>about </div>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>contact us</div>
                <div className='mx-3 hover:font-bold hover:text-blue-300'>explore</div>
            </div>
        </div>

)

}

    </div>
  )
}

export default Navbar
