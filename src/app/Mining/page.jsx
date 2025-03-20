
"use client";
import React, { useState } from 'react'
import Image from "next/image";
import container from "../assets/backgroundmining.png";
import bg from "../assets/bg.png";
import action1 from "../assets/mining1.png";
import action2 from "../assets/mining2.png";
import action3 from "../assets/mining3.png";
import action4 from "../assets/mining4.png";
import action5 from "../assets/mining5.png";
import action6 from "../assets/mining6.png";
import Villian  from '../assets/villianavatar.png'
import miningstats from '../assets/miningstate.png'
import screen from '../assets/miiningbg.png'
import bottomline from '../assets/bottomline.png';
import popupborder from '../assets/popup.png';
import popup from '../assets/popupbg.png';
import { Dialog } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";



function Mining() {
    const mining = [
        { image: action1, id: "13", position: "Transport" },
        { image: action2, id: "234", position: "Miner" },
        { image: action3, id: "124", position: "Foreman" },
        { image: action4, id: "325", position: "Transport" },
        { image: action5, id: "235", position: "Miner" },
        { image: action6, id: "434", position: "Foreman" },


    ];
  
    const [isPopup,setPopup]=useState(false);
    const handlePopup=()=>{
     setPopup(true);
    }
    return (


        <div className="min-h-screen w-full overflow-y-auto objecy-contain">
          

            <div className="lg:m-[20px] lg:mt-[40px] sm-m-[10px] md::m-[10px] grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-2 lg:h-[100%]  md:h-[800px] sm:h-[900px] h-[700px]">
                   {/* Mining Container */}
                <div className=" lg:w-[49%] w-[100%]   h-[100%] lg:col-span-1 row-span-1">
      
                    <div className="absolute lg:mx-[10px] lg:w-[48%] w-[100%] lg:h-full md:h-[100%]  h-[85%]">
                        <Image src={container} alt="game action" className=" w-full h-[100%]  absolute overflow-y-auto no-scrollbar" />

                        {/* Title */}
                        <p className="absolute lg:top-[20px] top-[10px] left-[8%] text-[23px] font-[500] text-[#00CDD5] uppercase tracking-[5px]" style={{ WebkitTextStroke: '0.5px white' }}>
                            ACTIVE
                        </p>
                        <div className='container absolute lg:top-[110px] top-[60px] lg:left-[50px] sm:left-[50px] md:left-[70px] left-[30px] lg:w-[85%] md:w-[80%] 
                  max-h-[65vh] overflow-y-auto no-scrollbar w-[85%] '>
                            <div className="grid  sm:grid-cols-3 grid-cols-2 gap-x-2 gap-y-6  lg:gap-x-2 md:gap-x-4 sm:gap-x-10 sm:gap-y-10 lg:gap-y-6">


                                {mining.map((item, index) => (
                                    <div className="relative xlg:w-[150px] md:w-auto  w-auto border lg:h-[490px] sm:h-[400px] hover:border-2 hover:border-[#00AEEF] bg-[#101010] lg:p-4  p-1 shadow-lg">
                                        {/* Outer Glow Border */}
                                        <div className="absolute inset-0 border-[4px] border-[#ff6600] p-2"></div>

                                        {/* NFT Image */}
                                        <div className="relative  overflow-hidden rounded-lg h-[180px] w-full border-[4px] border-[white]">
                                            <Image src={item.image} alt="" className='h-full w-full'
                                            />
                                        </div>

                                        {/* NFT Details */}
                                        <div className="mt-4 text-white text-center">
                                            <p className="text-lg font-bold">
                                                NFT ID: <span className="text-[#00AEEF]">{item?.id}</span>
                                            </p>
                                            <p className="text-md text-gray-300">POSITION: {item?.position}</p>
                                            <p className="text-md text-gray-400">
                                                Time Remaining: <span className="text-[#ff6600]">5 days : 4 hrs : 15 min</span>
                                            </p>
                                            <p className="text-md text-gray-400">
                                                Estimated Production: <span className="text-[#00FF99]">24.115 Cryptopium Ore</span>
                                            </p>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                            <div className='flex items-center justify-center ml-[20px]'>
                            <button onClick={handlePopup} className=' md:w-[537px] sm:w-[320px] w-[200px] h-[50px] border-[1px] bg-black border-[#78E9C3] rounded-[4px] text-[18px] font-[700] text-white mt-[20px] '>send them to the mines</button>
                            <Dialog open={isPopup} onClose={() => setPopup(false)} className="">
  <div className="relative w-auto h-auto object-cover   flex flex-col items-center justify-center bg-[black]">
    {/* Popup Border */}
    <Image src={popupborder} alt="popup border" className="relative z-[100]" />

    {/* Popup Image (Properly Positioned) */}
    <Image src={popup} alt="popup" className="absolute top-[1%]  z-[100]" />
    <div className='absolute top-[10%] left-[6%]  h-[300px] w-[540px] '>
      
<div className='flex flex-col  gap-10 '>
  <div className='flex lg:flex-row flex-col gap-6'>
    <Image src={action1} alt="" className='h-[99px] w-[99px] border-[3px] border-[#00CDD5] items-start justify-center flex'/>
    <div className='font-[400] text-[12px] text-white flex flex-col items-start uppercase justify-center gap-2'>
      <span>NFT ID: <span className='text-[#44B6A1]'>777</span></span>
      <span>Daily Cost: <span className='text-[#44B6A1]'>$20</span></span>
      <span>Position:  <span className='text-[#44B6A1]'>transport</span></span>
    </div>
    <div className=' flex items-center justify-center ml-[20px]' >
      <button className='w-[182px] h-[40px] bg-black text-white  border-[1px] border-[#44B6A1] flex items-center justify-center gap-2 text-[12px] font-[700] shadow-[0px_4px_10px_#44B6A1]'>select duration<FaAngleDown />
      </button>


    </div>

  </div>
  <div className='flex  gap-6'>
    <Image src={action2} alt="" className='h-[99px] w-[99px] border-[3px] border-[#00CDD5] items-start justify-center flex'/>
    <div className='font-[400] text-[12px] text-white flex flex-col items-start uppercase justify-center gap-2'>
      <span>NFT ID: <span className='text-[#44B6A1]'>59</span></span>
      <span>Daily Cost: <span className='text-[#44B6A1]'>$50</span></span>
      <span>Position:  <span className='text-[#44B6A1]'>Miner</span></span>
    </div>
    <div className=' flex items-center justify-center ml-[50px]' >
      <button className='w-[182px] h-[40px] bg-black text-white  border-[1px] border-[#44B6A1] flex items-center justify-center gap-2 text-[12px] font-[700] shadow-[0px_4px_10px_#44B6A1]'>select duration<FaAngleDown />
      </button>


    </div>

</div>
      
        
      </div>
      <div className='flex items-center justify-center mt-[20px]'>
        <button className='h-[44px] w-[257px] text-white bg-black border-[1px] border-[#02D6DE]'>PROCEED TO PAYMENT</button>
      </div>

    </div>
  </div>
</Dialog>
                            </div>
                             
                        </div>

                    </div>
                  
                </div>
          {/* Right Section */}
        <div className="h-[100%] lg:w-[30%] lg:mt-0 mt-[150px] lg:col-span-1 row-span-1 lg:ml-[220px]">
        <div className=" h-[100%] w-[100%]  absolute lg:hidden block z-[50] sm:top-[440px]  top-[420px]">
            <Image src={Villian} alt="villain" className="h-[100%]  w-[80%] md:w-[60%] md:h-screen sm:h-[600px] flex items-end justify-end md:left-[40%]  sm:left-[22%] left-[25%] absolute" />
          </div>

          {/* Mining Stats Section */}
          <Image src={screen} alt="mining stats" className="absolute lg:block hidden h-[600px] w-[45%] " />
          <div className="flex flex-col lg:items-center items-start lg:justify-center w-[400px] relative  lg:top-[1%] top-[-28%] md:top-[-20%] sm:top-[-35%] sm:left-[4%] left-[2%]">
          <Image src={miningstats} alt="mining" className="absolute lg:h-[100px] lg:w-[100px] h-[72px] w-[72px] lg:top-[180px] md:top-[130px] sm:top-[100px] top-[90px]" />

            <div className="absolute lg:top-[50px] px-6 lg:text-center lg:left-[0%] sm:left-[40%] left-[2%] top-[-12%] lg:w-[100%] sm:w-[80%] w-[50%]">
              <p className="sm:text-[18px] text-[10px] font-[500] text-[#00CDD5] bg-[#2a2a2a] sm:px-4 sm:py-2 p-2 rounded-lg shadow-lg">
                You have <span className="text-[#00FF99]">3 miners</span> that
                aren't working... get them to work, <span className="text-[#00CDD5]">NOW!</span>
              </p>
            </div>

            <span className="text-[21px] font-[500] text-[#00CDD5] lg:mt-[150px] md:mt-[90px] sm:mt-[170px]  mt-[70px]">
              MINING STATS
            </span>

            {/* Stats List */}
            <div className="lg:mt-[120px] md:mt-[70px] sm:mt-[40px] mt-[70px] text-white sm:w-full w-[70%] lg:px-6 pl-2 z-[70]">
              <p className="sm:text-[22px] text-[15px] font-[400] mt-2 text-[#FFFFFF]">
                ◉ Total Contracts Completed
                <span className="float-right text-[#00CDD5]">4753</span>
              </p>
              <p className="sm:text-[22px] text-[15px] font-[400] mt-2 text-[#FFFFFF]">
                ◉ Total Days Mined
                <span className="float-right text-[#00CDD5]">4753</span>
              </p>
              <p className="sm:text-[22px] text-[15px]font-[400] mt-2 text-[#FFFFFF]">
                ◉ Miner With Most Days Mined
                <span className="float-right text-[#00CDD5]">4753</span>
              </p> 
              <p className="sm:text-[22px] text-[15px] font-[400] mt-2 text-[#FFFFFF]">
                ◉ Most Profitable Miner
                <span className="float-right text-[#00CDD5]">4753</span>
              </p>
              <p className="sm:text-[22px] text-[15px] font-[400] mt-2 text-[#FFFFFF]">
                To-Date Value Mined =
                <span className="text-[#5BBBBF]"> 2732 Cryptopium</span>
              </p>
            </div>
         </div>
        
         </div>

          {/* Villain Character */}
          <div className=" h-[100%] w-[25%] absolute right-0 top-[-20px] z-[60] lg:col-span-1 lg:block hidden">
            <Image src={Villian} alt="villain" className="h-full w-full" />
          </div>

            </div>
             <div className="mt-[160px]"> {/* Add margin to push it down */}
                 <Image src={bottomline} alt="bgline" />
               </div>
        </div>

     
    )
}

export default Mining