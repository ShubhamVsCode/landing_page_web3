import React from 'react'

const Section4Card = ({ title, description, image }) => {
    return (
        <div className="space-y-5 relative w-90 mx-auto " >
            <div className="circle" ></div>
            <div><img src={image} alt="" /></div>
            <div className="text-5xl font-bold " >{title}</div>
            <div className="text-lg w-96" >{description}</div>
        </div>
    )
}

export default Section4Card
