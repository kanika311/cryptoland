import React from 'react'
import bgrefine from '../assets/Mining Screen 4.png'
import bgrefinemobile from '../assets/RefiningMobile.png'
import Image from 'next/image'
import bottomline from '../assets/bottomline.png';
import dot from '../assets/dotstructure.png'
import action1 from "../assets/mining1.png";
import action2 from "../assets/mining2.png";
import action3 from "../assets/mining3.png";
import action4 from "../assets/mining4.png";
import action5 from "../assets/mining5.png";
import refinelogo from '../assets/refine.png'
import refine from '../assets/refinelogo2.png'



function page() {
  return (
    <div className="min-h-screen w-[100%] ">
      {/* Main Content */}

      <div className="relative object-contain m-10 lg:block hidden ">
        <Image src={bgrefine} alt="bgrefine" className='overflow-y-auto no-scrollbar' />

        {/* title */}
        <p className="absolute top-[15px] left-[6%] text-[28px] font-[500] text-[#00CDD5] uppercase tracking-[5px]" style={{ WebkitTextStroke: '0.5px white' }}>
          DGP
        </p>
        <p className="absolute top-[15px] left-[16%] text-[28px] font-[500] text-[#00CDD5] uppercase tracking-[5px]" style={{ WebkitTextStroke: '0.5px white' }}>
          SUBCLASS
        </p>
        <p className="absolute top-[7px] left-[38%] text-[25px] font-[500] text-[#00CDD5] uppercase tracking-[5px]" style={{ WebkitTextStroke: '0.5px white' }}>
          Theft <br />
          risk1
        </p>
        <p className="absolute top-[7px] left-[50%] text-[25px] font-[500] text-[#00CDD5] uppercase tracking-[5px]" style={{ WebkitTextStroke: '0.5px white' }}>
          Theft <br />
          risk2
        </p>

        <div className="grid grid-cols-12 absolute top-[60px] left-[6%] w-full max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00CDD5] scrollbar-track-[#222] no-scrollbar">
        <div className='col-span-6 relative top-[30px] h-[500px] '>



            <div className='flex gap-10'>
              <div className='flex flex-col gap-4'>
                <div className="flex items-center relative ">


                  <div className='hover:border-[1px] hover:border-[#00CDD5] w-[100px] h-[100px]'>
                    <div className="w-[93px] h-[93px] border-[3px] border-[white]">
                      <Image src={action1} alt="Character" width={99} height={99} />
                    </div>
                  </div>
                  <div className='border-[1px] flex items-center justify-center border-[white] w-[120px]'></div>

                  {/* Role Label */}
                  <span className="absolute left-[70%] w-[132px] bg-black text-[#00CDD5] border-[2px] border-[white] p-2 flex items-center justify-center text-lg font-bold uppercase tracking-wide">
                    Foreman
                  </span>
                </div>
                <div className="flex items-center relative ">
                  {/* Image with Border */}
                  <div className='hover:border-[1px] hover:border-[#00CDD5] w-[100px] h-[100px]'>
                    <div className="w-[93px] h-[93px] border-[3px] border-[white]">
                      <Image src={action2} alt="Character" width={99} height={99} />
                    </div>
                  </div>
                  <div className='border-[1px] flex items-center justify-center border-[white] w-[120px]'></div>

                  {/* Role Label */}
                  <span className="absolute left-[70%] w-[132px] p-2 flex items-center justify-center bg-black text-[#00CDD5] border-[2px] border-[white] text-lg font-bold uppercase tracking-wide">
                    MINER
                  </span>
                </div>
                <div className="flex items-center relative ">
                  {/* Image with Border */}
                  <div className='hover:border-[1px] hover:border-[#00CDD5] w-[100px] h-[100px]'>
                    <div className="w-[93px] h-[93px] border-[3px] border-[white]">
                      <Image src={action3} alt="Character" width={99} height={99} />
                    </div>
                  </div>
                  <div className='border-[1px] flex items-center justify-center border-[white] w-[120px]'></div>

                  {/* Role Label */}
                  <span className="absolute left-[70%] w-[132px] p-2 flex items-center justify-center bg-black text-[#00CDD5] border-[2px] border-[white] text-lg font-bold uppercase tracking-wide">
                    MINER
                  </span>
                </div>
                <div className="flex items-center relative ">
                  {/* Image with Border */}
                  <div className='hover:border-[1px] hover:border-[#00CDD5] w-[100px] h-[100px]'>
                    <div className="w-[93px] h-[93px] border-[3px] border-[white]">
                      <Image src={action4} alt="Character" width={99} height={99} />
                    </div>
                  </div>
                  <div className='border-[1px] flex items-center justify-center border-[white] w-[120px]'></div>

                  {/* Role Label */}
                  <span className="absolute left-[70%] w-[132px] p-2 flex items-center justify-center bg-black text-[#00CDD5] border-[2px] border-[white] text-lg font-bold uppercase tracking-wide">
                    MINER
                  </span>
                </div>
                <div className="flex items-center relative ">

                  <div className='hover:border-[1px] hover:border-[#00CDD5] w-[100px] h-[100px]'>
                    <div className="w-[93px] h-[93px] border-[3px] border-[white]">
                      <Image src={action5} alt="Character" width={99} height={99} />
                    </div>
                  </div>
                  <div className='border-[1px] flex items-center justify-center border-[white] w-[120px]'></div>


                  <span className="absolute left-[70%] w-[132px] p-2 flex items-center justify-center bg-black text-[#00CDD5] border-[2px] border-[white] text-lg font-bold uppercase tracking-wide">
                    MINER
                  </span>
                </div>


              </div>

              <div className='flex items-center '>
                <Image src={refinelogo} alt="" className='h-[200px] w-[300px]' />
              </div>
              <div className='flex flex-col  gap-[60px]'>
                <span className='text-[25px] text-white font-[700]'>5%</span>
                <span className='text-[25px] text-white font-[700]'>5%</span>
                <span className='text-[25px] text-white font-[700]'>5%</span>

                <span className='text-[25px] text-white font-[700]'>5%</span>

                <span className='text-[25px] text-white font-[700]'>5%</span>

              </div>
              <div className='flex flex-col  gap-[60px]'>
                <span className='text-[25px] text-white font-[700]'>5%</span>
                <span className='text-[25px] text-white font-[700]'>5%</span>
                <span className='text-[25px] text-white font-[700]'>5%</span>

                <span className='text-[25px] text-white font-[700]'>5%</span>

                <span className='text-[25px] text-white font-[700]'>5%</span>

              </div>
            </div>
          </div>
          <div className='col-span-5 '>
            <div className='flex flex-row  '>
              <Image src={dot} alt="dotted" className='h-[90%]   ml-[100px] mt-0' />
              <div className='flex items-center justify-start flex-col  w-full'>
                <p className='text-[25px] text-[#00CDD5] uppercase font-[400] mt-[20px]'>Available Cryptopium <br />
                  <span className='flex items-center justify-center'>ORE FOR REFINING:</span></p>
                <h1 className='text-[25px] text-[white] uppercase font-[400] mt-[20px]'>547 Cryptopium Ore</h1>
                <p className='text-[24px] text-[#00CDD5] uppercase font-[400] mt-[20px] '>How MUCH WOULD <br /><span className='flex items-center justify-center'>YOU LIKE TO REFINE?</span></p>

                <div className='flex items-center justify-center gap-6'>
                  <div className='w-[174px] h-[60px] bg-[#666666] border-[3px] border-[white] text-[28px] font-[400] flex items-center justify-center text-[white] mt-[20px]'>325/ <span className='text-[#00CDD5]'>545</span></div>
                  <div className="flex flex-col items-center mt-4">
                    {/* Increase Button */}
                    <button className="relative w-10 h-8 bg-transparent">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[25px] border-l-transparent 
                        border-r-[25px] border-r-transparent 
                        border-b-[30px] border-[#CCFAFC]"></div>
                      <span className="absolute top-3 left-1/2 transform -translate-x-1/2 text-black text-sm font-bold flex items-center justify-center">+5</span>
                    </button>



                    {/* Decrease Button */}
                    <button className="relative w-10 h-8 bg-transparent mt-1">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[25px] border-l-transparent 
                        border-r-[25px] border-r-transparent 
                        border-t-[30px] border-red-600"></div>
                      <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-black text-sm font-bold">-5</span>
                    </button>
                  </div>

                </div>
                <p className='flex items-center justify-center text-[28px] font-[400] text-[#00CDD5] mt-[40px]'>
                  REFINE NOW!
                </p>
                <Image src={refine} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative object-contain  lg:hidden grid grid-rows-9 border sm:grid-rows-3 md:flex md:flex-col w-[100%]  mt-[40px]  px-[2px] sm:px-[10px] mb-[100px] '>
        <div className='grid  md:flex sm:row-span-2 row-span-5 md:h-[60%] w-[100%]  '>
      
      <Image src={bgrefinemobile} alt="bgrefine" className=' h-[100%] sm:w-[98%] md:w-[100%] w-[100%] ' />

{/* title */}
<p className="absolute md:top-[25px] sm:top-[20px] top-[15px] left-[8%] sm:text-[24px] text-[13px] font-[700] text-[#00CDD5] uppercase tracking-[1px]" style={{ WebkitTextStroke: '0.5px white' }}>
  DGP
</p>
<p className="absolute  md:top-[25px] sm:top-[20px] top-[12px] left-[25%] sm:text-[24px] text-[13px] font-[700] text-[#00CDD5] uppercase tracking-[1px]" style={{ WebkitTextStroke: '0.5px white' }}>
  SUBCLASS
</p>
<p className="absolute  md:top-[25px] sm:top-[20px] top-[12px] left-[55%] sm:text-[24px] text-[13px] font-[700] text-[#00CDD5] uppercase tracking-[1px]" style={{ WebkitTextStroke: '0.5px white' }}>
  Theft <br />
  risk1
</p>
<p className="absolute  md:top-[25px] sm:top-[20px] top-[12px] left-[75%] sm:text-[24px] text-[13px] font-[700] text-[#00CDD5] uppercase tracking-[1px]" style={{ WebkitTextStroke: '0.5px white' }}>
  Theft <br />
  risk2
</p>
<div className="absolute sm:top-[120px] md:top-[160px] top-[80px] left-[8%] sm:left-[8%]  sm:max-h-[100%]  max-h-[400px]  w-[88%] overflow-y-auto sm:overflow-y-hidden">







<div className='flex md:gap-[220px] sm:gap-[160px] justify-between xs:gap-[50px] w-[100%] '>
  <div className='flex flex-col sm:gap-8   gap-6'>
    <div className="flex items-center justify-start gap-0 relative   ">


      <div className='hover:border-[1px] hover:border-[#1b1b1b] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]'>
        <div className="sm:w-[90px] sm:h-[90px] w-[76px] h-[76px] border-[3px] border-[white]">
          <Image src={action1} alt="Character" width={99} height={99} />
        </div>
      </div>
      <div className='border-[1px] flex items-center justify-center border-[white] w-[45px] absolute left-[90%]'></div>

      {/* Role Label */}
      <span className="absolute  left-[120%] w-[60px] text-[10px] sm:w-[90px] bg-black text-[#00CDD5] border-[1px] border-[white] sm:pd-2 flex items-center justify-center sm:text-[14px] font-bold uppercase ">
        Foreman
      </span>
    </div>
    <div className="flex items-center relative ">
      {/* Image with Border */}
      <div className='hover:border-[1px] hover:border-[#00CDD5] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]'>
      <div className="sm:w-[90px] sm:h-[90px] w-[76px] h-[76px] border-[3px] border-[white]">
          <Image src={action2} alt="Character" width={99} height={99} />
        </div>
      </div>
      <div className='border-[1px] flex items-center justify-center border-[white] w-[45px] absolute left-[90%]'></div>

      {/* Role Label */}
      <span className="absolute  left-[120%] w-[60px] text-[10px] sm:w-[90px] bg-black text-[#00CDD5] border-[1px] border-[white] sm:pd-2 flex items-center justify-center sm:text-[14px] font-bold uppercase ">        MINER
      </span>
    </div>
    <div className="flex items-center relative ">
      {/* Image with Border */}
      <div className='hover:border-[1px] hover:border-[#00CDD5] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]'>
      <div className="sm:w-[90px] sm:h-[90px] w-[76px] h-[76px] border-[3px] border-[white]">
          <Image src={action3} alt="Character" width={99} height={99} />
        </div>
      </div>
      <div className='border-[1px] flex items-center justify-center border-[white] w-[45px] absolute left-[90%]'></div>

{/* Role Label */}
<span className="absolute  left-[120%] w-[60px] text-[10px] sm:w-[90px] bg-black text-[#00CDD5] border-[1px] border-[white] sm:pd-2 flex items-center justify-center sm:text-[14px] font-bold uppercase ">        MINER
      </span>
    </div>
    <div className="flex items-center relative ">
      {/* Image with Border */}
      <div className='hover:border-[1px] hover:border-[#00CDD5] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]'>
      <div className="sm:w-[90px] sm:h-[90px] w-[76px] h-[76px] border-[3px] border-[white]">
          <Image src={action4} alt="Character" width={99} height={99} />
        </div>
      </div>
      <div className='border-[1px] flex items-center justify-center border-[white] w-[45px] absolute left-[90%]'></div>

{/* Role Label */}
<span className="absolute  left-[120%] w-[60px] text-[10px] sm:w-[90px] bg-black text-[#00CDD5] border-[1px] border-[white] sm:pd-2 flex items-center justify-center sm:text-[14px] font-bold uppercase ">        MINER
      </span>
    </div>
    <div className="flex items-center relative ">

    <div className='hover:border-[1px] hover:border-[#00CDD5] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]'>
    <div className="sm:w-[90px] sm:h-[90px] w-[76px] h-[76px] border-[3px] border-[white]">
          <Image src={action5} alt="Character" width={99} height={99} />
        </div>
      </div>
      <div className='border-[1px] flex items-center justify-center border-[white] w-[45px] absolute left-[90%]'></div>

{/* Role Label */}
<span className="absolute  left-[120%] w-[60px] text-[10px] sm:w-[90px] bg-black text-[#00CDD5] border-[1px] border-[white] sm:pd-2 flex items-center justify-center sm:text-[14px] font-bold uppercase ">       MINER
      </span>
    </div>


  </div>

<div className='flex gap-[40px] sm:justify-between w-[30%] md:w-[40%] md:mr-[40px] sm-mr-[50px] mr-[10px]  '>
  <div className='flex flex-col items-center justify-center border sm:gap-[100px] gap-[80px] w-auto'>
    <span className='sm:text-[25px] text-white fot-[400] text-[16px] sm:font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white fot-[400] text-[16px] sm:font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white fot-[400] text-[16px] sm:font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white fot-[400] text-[16px] sm:font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white fot-[400] text-[16px] sm:font-[700]'>5%</span>

  </div>
  <div className='flex flex-col  items-center justify-center border sm:gap-[100px] gap-[80px] w-auto '>
  <span className='sm:text-[25px] text-white text-[16px] font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white  text-[16px] font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white  text-[16px] font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white  text-[16px] font-[700]'>5%</span>
    <span className='sm:text-[25px] text-white  text-[16px] font-[700]'>5%</span>

  </div>
  </div> 
</div>
</div>
</div>
<div className='grid sm:row-span-1  mx-[14px] sm:mx-[18px] row-span-4 sm:w-[94%] w-[95%] bg-black  h-auto border-[3px] border-[#2D5B5D] '>

          
           
              <div className='flex items-center justify-center  flex-col  w-full'>
                <p className='sm:text-[25px]  text-[18px] text-[#00CDD5] uppercase font-[400] mt-[20px]'>Available Cryptopium <br />
                  <span className='flex items-center justify-center sm:text-[25px]  text-[18px]'>ORE FOR REFINING:</span></p>
                <h1 className='sm:text-[25px]  text-[18px] text-[white] uppercase font-[400] mt-[20px]'>547 Cryptopium Ore</h1>
                <p className='sm:text-[25px]  text-[18px] text-[#00CDD5] uppercase font-[400] mt-[20px] '>How MUCH WOULD <br /><span className='flex items-center justify-center'>YOU LIKE TO REFINE?</span></p>

                <div className='flex items-center justify-center gap-6'>
                  <div className='sm:w-[174px] w-[100px] h-[40px] sm:h-[60px] bg-[#666666] border-[3px] border-[white] sm:text-[28px]  text-[18px] font-[400] flex items-center justify-center text-[white] mt-[20px]'>325/ <span className='text-[#00CDD5]'>545</span></div>
                  <div className="flex flex-col items-center mt-4">
                    {/* Increase Button */}
                    <button className="relative w-10 h-8 bg-transparent">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[25px] border-l-transparent 
                        border-r-[25px] border-r-transparent 
                        border-b-[30px] border-[#CCFAFC]"></div>
                      <span className="absolute top-3 left-1/2 transform -translate-x-1/2 text-black text-sm font-bold flex items-center justify-center">+5</span>
                    </button>



                    {/* Decrease Button */}
                    <button className="relative w-10 h-8 bg-transparent mt-1">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[25px] border-l-transparent 
                        border-r-[25px] border-r-transparent 
                        border-t-[30px] border-red-600"></div>
                      <span className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-black text-sm font-bold">-5</span>
                    </button>
                  </div>

                </div>
                <div className='flex items-center justify-center gap-2'>
                <p className=' sm:text-[28px] text-[18px] font-[400] text-[#00CDD5] mt-[40px]'>
                  REFINE NOW!
                </p>
                <Image src={refine} alt="" />
                </div>
              </div>
            
       
  </div>
      </div>


      {/* Bottom Image */}
      <div className="mt-[40px] md:block hidden"> {/* Add margin to push it down */}
        <Image src={bottomline} alt="bgline" />
        {/* Title */}

      </div>
    </div>
  )
}

export default page 