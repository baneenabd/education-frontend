import React from "react";
import * as Tabs from '@radix-ui/react-tabs';

const LogIn = () => {
    return <section id='login' className="   flex flex-col items-center  ">
        <div className=" mt-[50px] mb-[50px]   w-[60%] h-[500px] bg-slate-600 rounded-tl-[40px] shadow-lg  rounded-br-[40px]  flex justify-between items-center">
            <img src='login.jpeg' className=' w-[50%] h-[100%] rounded-tl-[40px] '></img>

            <div className=" pt-[20px]   w-[50%] h-[100%]  bg-slate-200 flex flex-col items-center rounded-br-[40px] ">
                <p className="  text-center text-[30px] font-serif  text-slate-800">
                    مرحبا بك في دليل المعلم
                </p >

                <Tabs.Root
                    className=" pt-[20px] flex flex-col items-center bg-transparent w-[100%]   	 "
                    defaultValue="tab1"
                >
                    <Tabs.List className=" w-[300px] h-[50px] rounded-[50px]  bg-cyan-300 flex items-center  " >
                        <Tabs.Trigger
                            className=" rounded-[50px]  data-[state=active]:bg-cyan-400   hover:text-sky-400 px-5 h-[50px] flex-1 flex items-center justify-center text-slate-100 text-[15px]  leading-none text-mauve11 select-none  cursor-pointer"
                            value="tab1"
                        >
                            حساب جديد
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className=" rounded-[40px]  data-[state=active]:bg-cyan-400   hover:text-sky-400 px-5 h-[50px] flex-1 flex items-center justify-center text-slate-100 text-[15px]  leading-none text-mauve11 select-none cursor-pointer"
                            value="tab2"
                        >
                            تسجيل الدخول                    </Tabs.Trigger>

                    </Tabs.List>
                    <Tabs.Content
                        className="grow p-5 text-slate-800 "
                        value="tab1"
                    >
                        <p className="mb-5  text-[13px] text-center leading-normal">
                            منصة تعليمية متكاملة توفر تجربة دراسية
                        </p>
                        <p className="mb-1 mt-5 pr-8 text-[14px] text-right leading-normal">
                            البريد الألكتروني                    </p>
                        <input placeholder="إكتب بريدك الألكتروني" className="text-right pr-3 w-[350px] h-[40px] border text-[12px] border-cyan-500 rounded-[50px] "></input>

                        <p className="mb-1 mt-5 pr-8 text-[14px] text-right leading-normal">
                            اسم المستخدم
                        </p>
                        <input placeholder="إكتب إسم المستخدم" className=" w-[350px] h-[40px] pr-3 border text-[12px] text-right border-cyan-500 rounded-[50px] "></input>
                        <p className="mb-1 mt-5 pr-8  text-[14px] text-right leading-normal">

                            كلمة المرور                    </p>
                        <input placeholder="إكتب كلمة المرور" className="text-right w-[350px] pr-3 h-[40px] border text-[12px] border-cyan-500 rounded-[50px] "></input>

                        <button className=" rounded-[50px] mt-5  bg-cyan-400   hover:text-sky-400 w-32  h-[30px] text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer">إنشاء حساب</button>


                    </Tabs.Content>
                    <Tabs.Content
                        className="grow p-5 text-slate-800 "
                        value="tab2"
                    >
                        <p className="mb-1  text-[13px] text-center leading-normal">
                            منصة تعليمية متكاملة توفر تجربة دراسية
                        </p>
                        <p className="mb-1 mt-5 pr-8  text-[14px] text-right leading-normal">
                            اسم المستخدم
                        </p>
                        <input placeholder="إكتب إسم المستخدم" className=" w-[350px] h-[40px] text-[12px] text-right pr-3 border border-cyan-500 rounded-[50px] "></input>
                        <p className="mb-1 mt-5 pr-8  text-[14px] text-right leading-normal">

                            كلمة المرور                    </p>
                        <input placeholder="إكتب كلمة المرور" className=" w-[350px] h-[40px] pr-3 text-[12px] text-right border border-cyan-500 rounded-[50px] "></input>

                        <button className=" rounded-[50px] mt-5  bg-cyan-400   hover:text-sky-400 w-32  h-[30px]  text-slate-100 text-[15px] leading-none text-mauve11  cursor-pointer"> تسجيل الدخول</button>


                    </Tabs.Content>

                </Tabs.Root>
            </div>
        </div>
    </section>
};
export default LogIn;
