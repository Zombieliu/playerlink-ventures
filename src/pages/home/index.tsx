import React, { useEffect } from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"


const Top = () =>{
    return(
        <div className=" px-5 pt-24  lg:px-10 xl:px-20 mx-auto relative">
            <div className="absolute inset-0">
                <img
                    className=" w-full h-full object-cover"
                    src="Pl venters 页面 封面区域背景.png"
                    alt="People working on laptops"
                />
            </div>
            <div className="relative text-white w-full rounded-2xl py-10 px-5 md:py-32 md:px-10  flex justify-between">
                <div className="w-1/2">
                <div className="">
                    <div className="text-2xl md:text-4xl xl:text-6xl  ">
                       Introducing Venters
                    </div>
                    <div className="text-2xl  xl:text-4xl font-semibold">
                   Detailed introduction
                    </div>
                </div>
                <div className="mt-4 text-xs md:text-sm">
                    his is a detail, as long as you write your username starting with @ it`s the same but I forwarded this question to our team and will inform you when it`s clarified so you form you when it`s clarified so you can fill the gleam  except this part
                </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
const Projects = () =>{
    return(
        <div className="bg-black mx-auto relative pt-10">
            <div className=" text-white text-center pb-10 ">
                <div className="md:text-4xl 2xl:text-6xl">
                    Ventures
                </div>
                <div className="flex justify-center">
                    <div className="2xl:w-5/12">
                        We are a non-profit foundation headquartered in Switzerland that is responsible for contracting protocol maintainers, funding ecosystem development, and
                        shepherding core governance of the PlayerLink Protocol.
                    </div>
                </div>

            </div>
            <div className="bg-black">

                <div className=" px-5    mx-auto relative">
                    <div className="relative text-white w-full rounded-2xl pb-12  py-3 " style={{backgroundImage:"url('Pl venters 页面 走马灯区域背景字.png')"}}>
                        <Partner/>
                        <Partner2/>

                    </div>
                </div>
            </div>
        </div>
    )

}
const Partner = () =>{

    useEffect(()=>{

        const onload = () =>{

            const oDiv = document.getElementById('div1');

            const oUl = document.getElementsByTagName('ul')[0];

            const Li = oUl.getElementsByTagName('li');

            oUl.innerHTML = oUl.innerHTML+oUl.innerHTML;

            oUl.style.width = (Li[0].offsetWidth*Li.length)/16+'rem';

            const speed = 4

            function move(){

                if(oUl.offsetLeft<-oUl.offsetWidth/speed){
                    oUl.style.left = '0'
                }
                if(oUl.offsetLeft>0){
                    oUl.style.left = (-oUl.offsetWidth/speed)/16+'rem';
                }
                oUl.style.left = (oUl.offsetLeft-2)/16+'rem';//进行左横向滚动
                // oUl.style.left = oUl.offsetLeft+speed+'px';//进行右横向滚动
            }
            let timer = setInterval(move,60)

            oDiv.onmouseover=function(){

                clearInterval(timer);

            }
            oDiv.onmouseout=function(){

                timer = setInterval(move,60)

            }

        }
        onload()
    },[])

    const  partner = [
        {
            img:"Blocklike-color.svg",
        },
        {
            img:"defi之道-color.svg",
        },
        {
            img:"Foresight-News-color.svg",
        },
        {
            img:"PANews-color.svg",
        },
        {
            img:"星球日报-color.svg",
        },
        {
            img:"深潮-color.svg",
        },
        {
            img:"火星财经-color.svg",
        },
        {
            img:"陀螺科技-color.svg",
        },


    ]
    return(
        <div className="mt-10 mx-4 relative" id="div1">
            <div className="flex   relative overflow-hidden w-full h-16" >
                <ul className="flex mb-2 absolute">
                    {partner.map(item=>(
                        <li key={item.img} id="li" className='w-24 xl:w-44 bg-white rounded-xl mr-4 '>
                            <img  className=" filter grayscale hover:grayscale-0  transition duration-300" src={item.img} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )

}
const Partner2 = () =>{

    useEffect(()=>{

        const onload = () =>{

            const Div2 = document.getElementById('div2');

            const UL2 = document.getElementsByTagName('h3')[0];

            const Li2 = UL2.getElementsByTagName('li');

            UL2.innerHTML = UL2.innerHTML+UL2.innerHTML;

            UL2.style.width = (Li2[0].offsetWidth*Li2.length)/16+'rem';

            const speed = 4

            function move2(){

                if(UL2.offsetLeft<-UL2.offsetWidth/speed){
                    UL2.style.left = '0'
                }
                if(UL2.offsetLeft>0){
                    UL2.style.left = (-UL2.offsetWidth/speed)/16+'rem';
                }
                // UL2.style.left = (UL2.offsetLeft-2)/16+'rem';//进行左横向滚动
                UL2.style.left = (UL2.offsetLeft)/16+0.1+'rem';//进行右横向滚动
            }
            let timer2 = setInterval(move2,60)

            Div2.onmouseover=function(){

                clearInterval(timer2);

            }
            Div2.onmouseout=function(){

                timer2 = setInterval(move2,60)

            }

        }
        onload()
    },[])

    const  partner = [
        {
            img:"Blocklike-color.svg",
        },
        {
            img:"defi之道-color.svg",
        },
        {
            img:"Foresight-News-color.svg",
        },
        {
            img:"PANews-color.svg",
        },
        {
            img:"星球日报-color.svg",
        },
        {
            img:"深潮-color.svg",
        },
        {
            img:"火星财经-color.svg",
        },
        {
            img:"陀螺科技-color.svg",
        },


    ]
    return(
        <div className="mt-5 mx-4 relative">
            <div className="flex   relative overflow-hidden w-full h-16" id="div2" >
                <h3 className="flex mb-2 absolute" >
                    {partner.map(item=>(
                        <li key={item.img}   className='w-24 xl:w-44 bg-white rounded-xl mr-4 list-none'>
                            <img  className=" filter grayscale hover:grayscale-0  transition duration-300" src={item.img} />
                        </li>
                    ))}
                </h3>
            </div>
        </div>

    )

}
const Sss = () =>{
    return(
        <div className="relative text-center text-white py-20">
            <div className="absolute inset-0">
                <img
                    className="w-full   h-full object-cover"
                    src="Pl venters 页面 联系区域背景.png"
                    alt="People working on laptops"
                />
            </div>
            <div className="relative">
            <div className="font-extrabold">
               Contact Us
            </div>
            <div className="text-4xl mt-6 font-extrabold">
              Please enter your Email.
            </div>
            <div className="mt-5 md:flex justify-center">
                <input type="text"
                       className="bg-gray-50 text-lg rounded-full text-black p-3 outline-none   w-9/12 lg:w-8/12 xl:w-5/12 border  "
                       placeholder="Email"/>
                <p className="flex justify-center text-center text-base font-medium text-gray-500">
                    <button  className="text-lg whitespace-nowrap border-2 border-green-400 inline-flex items-center md:-ml-44 md:mt-1 md:mb-1 mt-6 py-3 px-24 justify-center md:px-10  rounded-full shadow-sm text-base font-semibold text-black bg-white  "
                    >
                        Subscribe
                    </button>
                </p>
            </div>
            </div>
        </div>
    )
}
export default function Home() {
    return (
        <div>
            <div className="mx-auto relative  transition duration-700">

                <Header/>
                <div className="  relative   mx-auto ">
                    <Top/>
                    <Projects/>
                    <Sss/>
                </div>
            </div>
            <Tail/>
        </div>
    )
}
