
const invest1=[
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/1608297609-50888.png/:/rs=w:253,h:100,cg:true,m/cr=w:253,h:100",
    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/5f85b55461966f9be2be2a6a_DHEDGE_logo_full_blue.png/:/rs=w:500,h:100,cg:true,m/cr=w:500,h:100",
    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/spaces_-LlveffYY8TD7YiG25FC_avatar-rectangle.png/:/rs=w:257,h:100,cg:true,m/cr=w:257,h:100",
    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/chain_guardians.3f80dcb.png/:/rs=w:105,h:100,cg:true,m/cr=w:105,h:100",
    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/image_2020-11-23_105438.png/:/rs=w:178,h:100,cg:true,m/cr=w:178,h:100",
    },
]
const invest2=[
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/avatar_Copy_of_Celsius_Network_Logo_Revisions_.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100",

    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/superrare_logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:389,h:100,cg:true",

    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/1_Sf5c1wMphG56U6XDZxZ_BQ.png/:/rs=w:342,h:100,cg:true,m/cr=w:342,h:100",

    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/Screenshot%202021-01-15%20at%2012.46.38%20PM.png/:/rs=w:128,h:100,cg:true,m/cr=w:128,h:100",

    },
    {
        name:"",
        img:"https://isteam.wsimg.com/ip/2b9508ed-8d81-4e90-b2cc-3eab73b8b9cc/CryptoMode-Orion-Protocol.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:219,h:100,cg:true",

    },

]

export default function Home() {
    return (
        <div>
            <div className="flex  bg-cover  md:bg-center sm:overflow-hidden"
                 style={{backgroundImage:"url('https://cdn.discordapp.com/attachments/897398778166906911/900033418979594280/1.jpg') "}}>
                <div className=" px-8 py-60 text-center md:text-left md:px-40 md:py-72 ">
                    <div className="inline-block text-white pl-3 pr-3">
                    <h1 className="text-3xl font-semibold">
                    Playerlink...
                    </h1>
                    <h2 className=" text-4xl md:w-96 font-extrabold mt-5 md:text-5xl ">
                    ... ventures into DEFI and NFT
                    </h2></div>
                </div>
            </div>
            {/*content*/}
            <div>
                <div className="p-24 md:p-32">
                <div className="pb-10">
                <div className="flex  flex-wrap justify-center md:justify-between md:flex-nowrap ">
                    {invest1.map((INVEST1)=>
                        <div key={INVEST1.name} className="max-w-max m-5 mx-auto md:mx-6">
                                <img
                                    className="h-full w-full w-auto h-auto object-fill"
                                    src={INVEST1.img}
                                    alt={INVEST1.name}
                                />
                        </div>
                    )}

                </div>
                    <div className="flex  flex-wrap justify-center md:justify-between md:flex-nowrap ">
                    {invest2.map((INVEST2)=>
                        <div key={INVEST2.name} className="max-w-max m-5 mx-auto md:mx-6">
                            <img
                                className="h-full w-full w-auto h-auto object-fill"
                                src={INVEST2.img}
                                alt={INVEST2.name}
                            />
                        </div>
                    )}
                    </div>
                </div>
            </div>
            </div>
            <div className="flex justify-center text-center p-20 bg-gray-100 border-solid border-gray-300 border-t-2">

                <div className=" border-solid border-black border-t-2 pt-5">
                    PL 2021
                </div>
            </div>
        </div>
    )
}
