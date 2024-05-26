"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

    return ( 
        <>
                <nav className="flex flex-between gap-2">
                        <Link href="/" className="flex"> 
                        <Image
                        src='/assets/images/Raman.jpg'
                        alt="Promptu Logo"
                        width={30}
                        height={30}
                        className="rounded-full"
                        
                        />
                        </Link>
                </nav>
        </>
     );
}
 
export default Nav;