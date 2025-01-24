'use client'
import React, { useEffect} from 'react'

const Login = () => {

    useEffect(() => {

        // Mengubah gaya body hanya di halaman ini
        document.body.style.backgroundColor = '#FFC300';
        document.body.style.fontFamily = 'Arial, sans-serif';
    
        // Membersihkan perubahan saat halaman berpindah
        return () => {
          document.body.style.backgroundColor = '';
          document.body.style.fontFamily = '';
        };
      }, []);
  return (
    <div className='center-container'>
            <title>Login</title>
            <div className='shadow-xl content' >
                <div className='grid grid-cols-2'>
                    <div id='column_1' className='bg-white rounded-bl-3xl rounded-tl-3xl'>
                        <div id='logo' className='p-10 h-1/4'>
                            <img src="/LogoNew.svg" alt="Logo" />
                        </div>
                        <div className='text-center h-3/4'>
                            <form action="">
                                <h1 className='text-4xl font-bold'>WELCOME TO RUIX</h1>
                                <p>Welcome to Ruix. dashboard Community</p>
                                <div><input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs mt-10"/></div>
                                <div><input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs mt-5"/></div>
                                <button className='btn btn-neutral w-full max-w-xs mt-5 rounded-full text-white'>Login</button>
                            </form>
                        </div>
                    </div>
                    <div id='column_2' className='bg-black rounded-br-3xl rounded-tr-3xl' >
                        <img src="/BackgroundNew.svg" alt="" className='rounded-br-3xl rounded-tr-3xl'/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login