"use client"; // 👈 This tells Next.js it's a client component

import Image from "next/image";
import container from "../assets/gameaction.png";
import bg from "../assets/bg.png";
import imagebox from "../assets/action-button.png";
import action1 from "../assets/action-1.png";
import action2 from "../assets/action-2.png";
import action3 from "../assets/action-3.png";
import action4 from "../assets/action-4.png";
import action5 from "../assets/action-5.png";
import action6 from "../assets/action-6.png";
import action7 from "../assets/action-7.png";
import action8 from "../assets/action-8.png";
import action9 from "../assets/action-9.webp";
import action10 from "../assets/action-10.png";
import action11 from "../assets/action-11.png";
import action12 from "../assets/action-12.png";
import action13 from "../assets/action-13.png";
import action14 from "../assets/action-14.png";
import action15 from "../assets/action-15.png";


import { useRouter } from "next/navigation";  



export default function GameAction() {
  const router = useRouter();
  const gameaction = [
    { image: action1, title: "AMM DEPOSIT" },
    { image: action2, title: "MY DGPS" },
    { image: action3, title: "RENT" },
    { image: action4, title: "MINE" ,onClick: () =>router.push("/Mining") },
    { image: action5, title: "THIEVE" },
    { image: action6, title: "GOVERN" },
    { image: action7, title: "RULE" },
    { image: action8, title: "TRAIN" },
    { image: action9, title: "BLACKSMITH TRAINING" },
    { image: action10, title: "ENHANCE" },
    { image: action11, title: "BANK" },
    { image: action12, title: "REFINE",onClick: () =>router.push("/refine") },
    { image: action13, title: "FORGE" },
    { image: action14, title: "LOOTBOX" },
    { image: action15, title: "TRADE" },
   
  ];

  return (
    <div className="h-screen w-full relative overflow-y-auto no-scrollbar">
   

      <div className="relative h-full w-full  ">
            <div className="md:mx-[20px] md:w-[60%] w-[100%] h-[100%] ">
                    
          
                  
          <p className="md:text-[28px] text-[16px] font-[400] text-white mx-[20px] pt-[20px]">
            SELECT YOUR NEXT IN-GAME ACTION
          </p>

         
          {/* Game Action Container */}
                    <div className="absolute sm:mx-[20px] lg:w-[65%] sm:w-[80%]  w-[100%] h-screen overflow-y-auto no-scrollbar">
  <Image src={container} alt="game action" className="w-full h-screen absolute" />

  {/* Title */}
  <p className="absolute top-[30px] left-[8%] text-[20px] font-[400] text-white uppercase">
    In-Game Actions
  </p>

  {/* Action Buttons Grid */}
  <div className="absolute top-[80px] lg:mx-[40px] sm:ml-[10px] lg:w-[90%]  
                  max-h-[65vh] overflow-y-auto no-scrollbar container w-[90%] flex justify-center">
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-4 sm:gap-1 gap-3 ml-[22px]">
      {gameaction.map((item, index) => (
        <div key={index} className="flex flex-col lg:items-center items-center relative w-auto  ">
          <div
            onClick={item.onClick || undefined}
            className="relative sm:w-[120px] w-[100%] lg:w-[157px] h-[170px] flex items-center justify-center  cursor-pointer 
                       hover:shadow-[0px_0px_20px_rgba(0,255,240,0.9)] 
                       border border-transparent hover:border-[#00fff0] hover:border-[2px] rounded-md bg-black/40 p-2  
                       transition-all duration-300 ease-in-out"
          >
            <Image src={imagebox} alt="action box" className="absolute w-full h-full " />
            <Image src={item.image} alt={item.title} className="absolute top-[10px] left-[10%] w-[75%] h-[75%]" />
            <div className="absolute w-[100%] md:w-[157px] h-[170px] bg-[rgba(0,0,0,0.2)] hover:bg-transparent"></div>
          </div>
          <span className="text-center flex items-start ml-2 uppercase text-[#00fff0] text-[18px] font-[500] mt-2">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
