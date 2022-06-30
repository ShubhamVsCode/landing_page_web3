import React from 'react'

const Section2 = () => {
    return (
        <div className="max-w-6xl mx-auto flex relative items-center my-52" >
            <div className="space-y-10" >
                <div className="bgSection2 max-w-xl" ></div>
                <h6 className="text-white/70" >COMMUNITY-OWNED AND OPERATED</h6>
                <h3 className="text-6xl font-[600] lead w-[60%] gradientText -ml-1" >Enter a Universe of Connected Services.</h3>
                <h4 className="w-[60%] leading-relaxed text-lg" >
                    Cronos apps and services connect using IBC, the Inter-Blockchain Communication protocol. This innovation enables you to freely exchange assets and data across sovereign.
                </h4>
                <button className="text-black px-14 py-4 gradientBg" >Learn</button>
                <button className="px-14  py-4" >Explore tokens</button>
            </div>
            <div className="space-y-20 gradientText font-bold text-right" >
                <div>
                    <p className="text-8xl" >256+</p>
                    <p>App & Services</p>
                </div>
                <div>
                    <p className="text-8xl" >$63B+</p>
                    <p>Digital Assets</p>
                </div>
            </div>
        </div>
    )
}

export default Section2
