import React from 'react'
import { usePathname   } from "next/navigation";
const WorkDetails = () => {
  const pathname = usePathname();
  let companyName = pathname?.split('/').pop();



  console.log(pathname, companyName);
  return (
    <div className='pt-5'>
     WorkDetails

    </div>
  )
}

export default WorkDetails