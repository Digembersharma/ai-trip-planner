 import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../components/ui/button'

const menuOptions=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact us',
        path:'/contact-us'
    }
]

function Header() {
  return (
    <header className='flex justify-between items-center p-6 border-b border-gray-200 bg-white sticky top-0 z-50 w-full'>
      {/* Logo - left aligned */}
      <div className='flex gap-2 items-center flex-1'>
        <Image src={'/logo.svg'} alt='logo' width={30} height={30}/>
        <h2 className='font-bold text-2xl'>AI Trip Planner</h2>
      </div>

      {/* Menu options - centered */}
      <nav className='flex gap-8 items-center justify-center flex-1'>
        {menuOptions.map((menu,index)=>(
          <Link key={index} href={menu.path}>
            <h2 className='text-lg hover:text-blue-600 transition-colors duration-200 font-medium'>
              {menu.name}
            </h2>
          </Link>
        ))}
      </nav>

      {/* Get Started button - right aligned */}
      <div className='flex justify-end flex-1'>
        <Button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2'>
          Get Started
        </Button>
      </div>
    </header>
  )
}

export default Header