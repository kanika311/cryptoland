"use client"; 
import React from 'react'
import Logo from './assets/logocryptpoland.png'
import Image from 'next/image'
import bg from './assets/navbarbg.png'
import { usePathname } from 'next/navigation'
function Navbar() {
  const pathname=usePathname();
  console.log(pathname,"path")

  return (
    

<div className="h-[123px] w-full z-50 top-0 shadow-md sticky flex items-center justify-center ">
 
      <div className="absolute inset-0">
        <Image src={bg} alt="bg" className="w-full h-[123px] " />
      </div>

    
      <div className="relative w-full flex flex-col lg:flex-row items-center justify-between  md:px-[20px] z-10">
        <div className=' flex items-center justify-start md:gap-10 gap-4'>
        <Image src={Logo} alt="Logo" className="md:h-[90px] h-[70px] w-auto"/>
        {(pathname==="/" || pathname==="/game") &&(
        <p className="text-white uppercase md:text-4xl text-xl sm:text-2xl  tracking-[6px] md:tracking-[15px] flex gap-2 md:gap-4">CRYPTOLAND</p>
        )}
          {pathname==="/Mining" &&(
        <p className="text-[#00CDD5] uppercase text-[54px]  "  style={{ WebkitTextStroke: '1px white' }}>MINING</p>
        )}
        {pathname==="/refine" &&(
        <p className="text-[#00CDD5] uppercase text-[54px]  "  style={{ WebkitTextStroke: '1px white' }}>REFINING</p>
        )}

        </div>
        
        {pathname === "/" && (
          <div className="flex items-center justify-center space-x-4 sm:space-x-5 md:space-x-6 text-[12px] md:text-[22px] sm:text-[18px] text-white font-[400]">
            <div>MARKET PLACE</div>
            <div>DEX</div>
            <div>SWAP COMMUNITY</div>
          </div>
        )}

        {/* ✅ Show "Wallet" button only on `/page` route */}
        {pathname === "/game" && (
          <div className='flex items-center justify-center'>
            <button className=" ml-[30px] w-[187px] h-[40px] bg-[#0bdbb54d] text-white  font-[400] border-[2px] border-[#0bdbb5] rounded-[9999px] cursor-pointer">CONNECT WALLET</button>
          </div>
        )}
  

   
      </div>
{/* ✅ Bottom Glowing Gradient Border Effect */}
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-black via-[#00ff99] to-black shadow-[0px_0px_12px_#00ff99]"></div>

    </div>
  )
}

export default Navbar