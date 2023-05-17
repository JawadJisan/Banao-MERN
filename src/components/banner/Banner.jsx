import React from 'react'
import banner from "../../assets/Rectangle 2.png"

const Banner = () => {
    return (
        <>
            <img src={banner} className="img-fluid bannerImg" alt="Images"></img>
            <div className='my-element '>
                <h1 className='fw-bold text-white' >Computer Engineering</h1>
                <p className='text-white'>142,765 Computer Engineers follow this</p>
            </div>
        </>
    )
}

export default Banner