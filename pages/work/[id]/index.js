import React from 'react'
import { usePathname   } from "next/navigation";
import {workDB} from '../../contact/works'
const WorkDetails = () => {
  const pathname = usePathname();
  let companyName = pathname?.split('/').pop();

  const currentCompany = workDB.find((work) => work.id === companyName);


  console.log(pathname, companyName);
  return (
    <div className='pt-5'>
      {currentCompany?.title}

    </div>
  )
}

export default WorkDetails