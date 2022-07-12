import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail";

const Core = ()=>{
    const  CoreMembers = [
        {
            img:"Pl ventures Team头像.png",
            name:"Abel Wang",
            h1:"This is a detail, as long as you write your username starting with @ it's the same but I forwarded this question to our team and will inform you when it's clarified so you form you when it's clarified so you can fill the gleam  except this part ",
        },
        {
            img:"Pl ventures Team头像.png",
            name:"Abel Wang2",
            h1:"This is a detail, as long as you write your username starting with @ it's the same but I forwarded this question to our team and will inform you when it's clarified so you can fill the gleam except this part",
        },
        {
            img:"Pl ventures Team头像.png",
            name:"Abel Wang3",
            h1:"This is a detail, as long as you write your username starting with @ it's the same but I forwarded this question to our team and will inform you when it's clarified so you form you when it's clarified so you can fill the gleam  except this part ",
        },
        {
            img:"Pl ventures Team头像.png",
            name:"Abel Wang4",
            h1:"This is a detail, as long as you write your username starting with @ it's the same but I forwarded this question to our team and will inform you when it's clarified so you can fill the gleam except this part",
        },
    ]
    return(
        <div className=" w-full rounded-2xl py-5  md:px-10 mb-20 lg:px-10 xl:px-48 px-5 ">
            <div className="text-2xl md:text-4xl xl:text-5xl text-center font-semibold ">
                Core Members
            </div>
            <div className="grid 2xl:grid-cols-3 gap-10 2xl:gap-20  mt-20 ">
                {CoreMembers.map(item=>(
                    <div key={item.name} className="flex p-2 justify-between   border border-green-300 rounded-xl items-center ">
                        <div className="flex flex-col justify-center">
                            <img  className="rounded-full w-24" src={item.img} alt=""/>
                        </div>
                        <div className="ml-10 w-11/12">
                            <div className="mb-5 text-2xl  font-semibold">
                                {item.name}
                            </div>
                            <div className="overflow-auto  h-32">
                                {item.h1}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

const TeamMembers = () =>{
    const teamMembers = [
        {
            img:"Pl ventures Team头像.png",
            name:"David",
            position:"UI/UX Designer"
        },
        {
            img:"Pl ventures Team头像.png",
            name:"David1",
            position:"UI/UX Designer"
        },
        {
            img:"Pl ventures Team头像.png",
            name:"David2",
            position:"UI/UX Designer"
        },
        {
            img:"Pl ventures Team头像.png",
            name:"David3",
            position:"UI/UX Designer"
        },
        {
            img:"Pl ventures Team头像.png",
            name:"David4",
            position:"UI/UX Designer"
        },
        {
            img:"Pl ventures Team头像.png",
            name:"David5",
            position:"UI/UX Designer"
        },
        {
            img:"Pl ventures Team头像.png",
            name:"David6",
            position:"UI/UX Designer"
        },

    ]
    return(
        <div className="bg-black bg-opacity-80 lg:px-10 xl:px-48 px-5 ">
        <div className=" w-full  rounded-2xl py-10 pb-20 px-5 md:px-10 ">
            <div className="text-2xl md:text-4xl xl:text-5xl text-center font-semibold ">
                Team Members
            </div>
            <div className="grid 2xl:grid-cols-6 gap-5  mt-20 ">
                {teamMembers.map(item=>(
                    <div key={item.name} className=" flex flex-col justify-center    items-center ">
                        <div className="items-center">
                            <img  className="rounded-full w-24" src={item.img} alt=""/>
                        </div>
                        <div className="text-center">
                            <div className=" text-xl  font-semibold">
                                {item.name}
                            </div>
                            <div className="">
                                {item.position}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

const Projects = () =>{
    const project = [
        {
            id:"1",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",
        },
        {
            id:"2",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",
        },
        {
            id:"3",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",
        },
        {
            id:"4",
            img:"https://cdn.discordapp.com/attachments/876498266550853642/978554481727918100/3921557bae63295f.png",
        },


    ]
    return(
        <div className="lg:px-10 xl:px-48 px-5  ">
            <div className=" w-full  rounded-2xl py-5 px-5 md:px-10 ">
                <div className="text-2xl  md:text-4xl xl:text-5xl text-center font-semibold ">
                  Projects Participated In
                </div>
                <div className="text-center text-xl text-gray-400">
                    Introduction to some projects that our team members have participated in
                </div>
                <div className="grid grid-cols-4 gap-20  mt-20 ">
                    {project.map(item=>(
                        <div key={item.id} className="">
                            <img className="" src={item.img} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default function Team() {
    return (
        <div className="">
            <div className="mx-auto relative bg-black bg-opacity-90 transition duration-700">
                {/*<div className="absolute inset-0">*/}
                {/*    <img*/}
                {/*        className=" w-full h-full object-cover"*/}
                {/*        src="tintin-bg.png"*/}
                {/*        alt="People working on laptops"*/}
                {/*    />*/}
                {/*</div>*/}
                <Header/>
                <div className=" relative  pt-24  text-white  mx-auto ">
                    <Core/>
                    <TeamMembers/>
                    <Projects/>
                </div>
            </div>
            <Tail/>
        </div>
    )
}
