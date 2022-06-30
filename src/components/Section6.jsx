import React from 'react'
import locker from '../images/locker.png'
import yuan from '../images/yuan.png'

const Section6 = () => {
    return (
        <div className="max-w-7xl mx-auto" >
            <h6 className="text-7xl leading-snug gradientText font-bold w-2/3" >Be Part of the Open Economy of the Future.</h6>
            <h6 className="text-2xl my-10" >Powerful Features</h6>
            <div className="grid grid-cols-4 gap-10 mt-32 grid-rows-2" >
                <div className="bg-[#141414] z-0 rounded-2xl relative col-span-2 row-span-2 space-y-10 p-10 " >
                    <h6 className="text-white/60" >INTERCHAIN ACCOUNTS</h6>
                    <div className="lockerCircle -z-10 h-80 w-80"></div>
                    <img src={locker} alt="" />
                    <h3 className="text-5xl gradientText leading-snug font-bold " >One secure account for all your digital assets.</h3>
                    <h6 className="text-white/60 ">COMING SOON</h6>
                </div>
                <div className="bg-[#141414] z-0 rounded-2xl relative col-span-2 space-y-10 p-10 " >
                    <h6 className="text-white/60" >DECENTRALIZED EXCHANGE</h6>
                    <div className="flex" >
                        <div className="yuanCircle -z-10 h-60 w-60"></div>
                        <h3 className="text-5xl gradientText leading-snug font-bold w-72" >Swap tokens & collectibles.</h3>
                        <div className="" >
                            <img src={yuan} className="w-72 absolute top-20 right-0 " alt="" />
                            <img src={yuan} className="w-72 absolute top-28 right-4 " alt="" />
                        </div>
                    </div>
                    <h6 className="text-white/60 absolute bottom-10">COMING SOON</h6>
                </div>

                <div className="bg-[#141414] z-0 rounded-2xl relative col-span-1 space-y-10 p-10 " >
                    <h6 className="text-white/60" >LIQUIDITY POOL</h6>
                    <div className="flex" >
                        <h3 className="text-5xl gradientText leading-snug font-bold w-72" >Provide liquidity, earn rewards.</h3>
                    </div>
                    <h6 className="text-white/60 absolute bottom-10">COMING SOON</h6>
                </div>

                <div className="bg-[#141414] z-0 rounded-2xl relative col-span-1 space-y-10 p-10 " >
                    <h6 className="text-white/60" >WRAPPED ETH</h6>
                    <div className="flex" >
                        <h3 className="text-5xl gradientText leading-snug font-bold w-72" >Eth Included</h3>
                    </div>
                    <h6 className="text-white/60 absolute bottom-10">COMING SOON</h6>
                </div>

            </div>
        </div>
    )
}

export default Section6
