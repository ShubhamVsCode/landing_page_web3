import React from 'react'

const Navbar = () => {
    return (
        <div className="flex select-none flex-row poppins mx-32 mt-16 items-center justify-between" >
            <span className="text-2xl" >
                CRONOS
            </span>
            <div className="space-x-12" >
                <span>Learn</span>
                <span>Build</span>
                <span>Explore</span>
            </div>
            <div className="text-xl" >
                Get Cronos
            </div>
        </div>
    )
}

export default Navbar
