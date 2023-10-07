"use client"

import React, { useContext } from 'react'
import Image from 'next/image'

import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseAuth } from '@/app/utils/FirebaseConfig'
import axios from 'axios'
import { CHECK_USER_ROUTE } from '@/app/utils/ApiRoutes'
import { AccountContext } from '@/app/context/AccountProvider';

function Login() {
    const {setAccount} = useContext(AccountContext);
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider()
        const {
            user
        } = await signInWithPopup(firebaseAuth, provider);
        try{
            // if(email){
            //     const {data} = await axios.post(CHECK_USER_ROUTE,{email})
            // }

            setAccount(user);
            

        }catch(err){
            console.log(err)
        }
        
    }
  return (
    <div className='flex justify-center items-center flex-col bg-panel-header-background h-screen w-screen gap-6'>
        <div className='flex justify-center items-center gap-3 text-white'>
            <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300}/>
            <span className='text-7xl font-semibold'>Whatsapp</span>
        </div>
        <button 
        className='flex flex-row justify-center items-center bg-search-input-container-background gap-7 p-4 rounded-lg'
        onClick={handleLogin}
        >
            <FcGoogle className='text-4xl'/>
            <h3 className="text-2xl text-white"> Login With Google</h3>
        </button>
    </div>
  )
}

export default Login