
"use client";  // 👈 This tells Next.js it's a client component

import Image from "next/image";
import Hero  from './assets/heroavatar.png'
import Villian  from './assets/villianavatar.png'
import banner from './assets/bannerlogo.png'
import bg from './assets/bg.png'
import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter();
  const handleGameAction=()=>{
   router.push('/game')
  }
  return (


<div className="h-screen w-full relative overflow-y-auto no-scrollbar">
 


<div className="grid md:grid-cols-5 h- w-full object-cover relative">
  <div className="lg:grid lg:col-span-2 hidden">
    <Image src={Hero} alt="hero avatar" className="h-[100%] w-[700px]"/>
  </div>
  <div className="lg:grid lg:col-span-1 lg:grid-rows-2 col-span-5 my-[60px] flex  flex-col items-center justify-center">
<div className="grid rows-span-1 ">
<Image src={banner} alt="logo bannner" />
</div>
<div className="grid rows-span-1 mt-[90px]">
  <div className="flex item-center justify-center">
  <button onClick={handleGameAction} className="w-[280px] h-[48px] border-[2px]  bg-black border-[#78E9C3] rouded-[2.64px] text-[28px] font-[400] text-[white] hover:bg-[#78E9C3] hover:text-[white]">ENTER THE GAME</button>

  </div>
</div>


  </div>
 <div className="lg:grid col-span-2 hidden">
 <Image src={Villian} alt="villian avatar" className=" h-screen"/>
 </div>
 </div>
</div>
  );
}
