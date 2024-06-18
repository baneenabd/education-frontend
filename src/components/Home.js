import React from "react";
const Home = () => {
    return <div className=" mt-5  h-auto  flex flex-col items-center justify-center ">
        <h1 className=" text-[35px]">كل شيء في موقع واحد</h1>
        <p className=" w-[35%] align-middle text-[18px]">الموقع عبارة عن مجموعة فيديوات ومدونات قوية عبر الإنترنت تجمع بين جميع الأدوات اللازمة لإدارة الصف الدراسي بإمتياز.</p>
        <div className=" m-10 flex justify-between w-[70%] ">
            <div className="flex flex-col items-center relative pt-8 ">
                <div className=" h-14 w-14 rounded-full shadow-lg bg-teal-500 absolute top-1"></div>
                <div className=" pt-9 w-64 h-48 rounded-2xl bg-white shadow-lg">
                    <h2 className=" text-[15px] font-bold">أكفأ المدربين</h2>
                    <p className=" text-[15px]">الفيديوات والمدونات مزودة من قبل أكفأ المدربين والأساتذة المختصين بطرائق التدريس وأساليب التعليم الحديثة</p>
                </div>
            </div>
            <div className="flex flex-col items-center relative pt-8 ">
                <div className=" h-14 w-14 rounded-full shadow-lg bg-cyan-500 absolute top-1"></div>
                <div className=" pt-9 w-64 h-48 rounded-2xl bg-white shadow-lg">
                    <h2 className=" text-[15px] font-bold">أكفأ المدربين</h2>
                    <p className=" text-[15px]">الفيديوات والمدونات مزودة من قبل أكفأ المدربين والأساتذة المختصين بطرائق التدريس وأساليب التعليم الحديثة</p>
                </div>
            </div>
            <div className="flex flex-col items-center relative pt-8 ">
                <div className=" h-14 w-14 rounded-full shadow-lg bg-indigo-500 absolute top-1"></div>
                <div className=" pt-9 w-64 h-48 rounded-2xl bg-white shadow-lg">
                    <h2 className=" text-[15px] font-bold">أكفأ المدربين</h2>
                    <p className=" text-[15px]">الفيديوات والمدونات مزودة من قبل أكفأ المدربين والأساتذة المختصين بطرائق التدريس وأساليب التعليم الحديثة</p>
                </div>
            </div>
        </div>
    </div>;
};
export default Home;
