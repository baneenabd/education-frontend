import React from "react";
const Programmers = () => {
    return <div className=" mt-5 mb-5 pt-5 h-[400px] w-[100%] flex flex-col items-center  ">
        <hr className="w-[80%] border-[1px]  border-[#49BBBD] "></hr>
        <h1 className="text-center text-[35px] font-serif  text-slate-800">مبرمجين الموقع</h1>
        <div className="w-[90%]  flex justify-evenly">
            <div className=" w-[45%] h-[200px]  mt-[50px] mb-[50px]  bg-slate-200    rounded-tl-[40px] rounded-bl-[40px] shadow-lg  rounded-tr-[40px]  flex justify-between items-center">
                <img src='zainab.jpg' className='  w-[200px] h-[100%] rounded-tl-[40px] rounded-bl-[40px]       ' alt=""></img>
                <div className=" w-[50%] mr-7 bg-slate-500 flex flex-col items-center justify-center">
                    <h1 className="">زينب ثابت</h1>
                    <p> </p>
                </div>
            </div>
            <div className=" w-[45%] h-[200px]  mt-[50px] mb-[50px]    bg-slate-200 rounded-tl-[40px] rounded-bl-[40px] shadow-lg  rounded-tr-[40px]  flex justify-between items-center">
                <img src='baneen.jpg' className='  w-[200px] h-[100%] rounded-tl-[40px] rounded-bl-[40px]       ' alt=""></img>

            </div>
        </div>


    </div>
};
export default Programmers;
