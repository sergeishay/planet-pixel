import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Socials from './Socials'
const UnderFooter = () => {
  return (
    <div className="flex flex-col max-w-[400px] justify-center self-center items-center py-[10vh]" >
        <div>
            {/* logo */}
            <Image src="/logo.svg" width={300} height={100} alt="logo"  />
        </div>
        <div>
            <p className="text-center text-white">Lorem ipsum dolor sit</p>
        </div>
        <div>
            {/* social component */}
            <Socials />
        </div>
        <div className="flex flex-row gap-3 justify-center items-center">
            <Link href={""} className="hover:text-lightBlue">Privacy Policy</Link>
            |
            <Link href={""} className="hover:text-lightBlue">Terms of Service</Link>
        </div>
    </div>
  )
}

export default UnderFooter