import React from 'react'
import ico from "../images/Group.png"
import BtnGradient from './BtnGradient'

const Section5 = () => {
    return (
        <div className="max-w-full flex my-12 mx-auto" >
            <img src={ico} alt="ico" />
            <div className="my-64 mr-36 " >
                <h3 className="leading-tight gradientText font-bold text-7xl" >Secured by the Hedron.</h3>
                <p className="text-xl my-9 text-right mr-4" >In return for securing the services on the Cronos Hub, transaction fees and staking rewards are distributed to HEDRON stakers.</p>
                <div className="text-right" >
                    <BtnGradient text="Start Stakning" />
                    <button className="pl-14 mr-4 py-4" >Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Section5
