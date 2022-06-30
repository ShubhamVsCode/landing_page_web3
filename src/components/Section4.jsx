import React from 'react'
import Section4Card from './Section4Card'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image1 from '../images/image1.png'
import chart from '../images/chart.png'
import BtnGradient from './BtnGradient'

const Section4 = () => {
    return (
        <>
            <div className="grid my-56 grid-cols-2 grid-rows-2 gap-y-28 max-w-7xl mx-auto " >
                <Section4Card image={image5} title={"Marketplace"} description={"Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation."} />

                <Section4Card image={image6} title={"Security provider"} description={"With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards."} />

                <Section4Card image={chart} title={"Router"} description={"A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin."} />

                <Section4Card image={image1} title={"Custodian"} description={"Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains."} />
            </div>
            <div className="max-w-5xl mx-auto -mt-36 " >
                <BtnGradient text="Cosmos Hub" />
            </div>
        </>
    )
}

export default Section4
