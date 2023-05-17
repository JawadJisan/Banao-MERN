import React, { useState } from 'react';
import img1 from "../../assets/Rectangle-1.png"
import img2 from "../../assets/Rectangle-3.png"
import img3 from "../../assets/Rectangle-2.png"
import ava from "../../assets/ava.png"
import Post from './Post';
import Login from '../Login/Login';



const datas = [
    {
        image: img1,
        type: "Article",
        heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
        details: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        user: "Sarthak Kamra",
        views: "1.4k views",
        id: 1,
        avater: ava
    },
    {
        image: img2,
        type: "Article",
        heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
        details: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        user: "Sarthak Kamra",
        views: "1.4k views",
        id: 1,
        avater: ava
    },
    {
        image: img3,
        type: "Article",
        heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
        details: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        user: "Sarthak Kamra",
        views: "1.4k views",
        id: 1,
        avater: ava
    },
]

const Posts = () => {
    const [joined, setJoined] = useState(false);


    const handleButtonClick = () => {
        setJoined(!joined);
    };

    return (
        <div className='post-container container '>
            <div className="container ">
                <div className="row postCon justify-content-center align-items-center">
                    <div className="col-8  ">
                        <div className='d-flex postHeadr gap-4 fs-6'>
                            <p className='fw-bold' > <u>All Posts(32)</u> </p>
                            <p>Article</p>
                            <p>Event</p>
                            <p>Education</p>
                            <p>Job</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex gap-4">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle btn-secondary mt-3 rounded-sm" type="submit">Write a Post</button>
                        </div>
                        <button onClick={handleButtonClick} className={`btn  ${joined ? 'btn-light  rounded-pill ' : 'btn-primary'}  mt-3 rounded-sm`} type="submit">
                            {joined ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                <path className='p-2' d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg>}
                            {joined ? 'Leave Group' : 'Join Group'}
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row postData">
                    <div className="col-8">
                        {datas.map((data) => (<Post data={data} key={data.id} />))}

                    </div>
                    <div className="col-4">
                        {joined && (
                            <>
                                <div class="input-group mb-3 border-0 border-bottom">
                                    <span class="input-group-text border-0 border-bottom">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>
                                    <input type="text" class="form-control border-0 border-bottom " aria-label="Amount (to the nearest dollar)"></input>
                                    <span class="input-group-text border-0 border-bottom "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg></span>
                                </div>
                                <div className='d-flex  mt-5 align-items-center justify-content-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                    </svg>
                                    <p className='p-2' >Your location will help us serve better and extend a personalised experience.</p>
                                </div>

                                <div className='mt-5' >
                                    <div className='d-flex  align-items-center justify-content-center'>
                                        <i style={{ width: "50px", height: "40px" }} class="bi bi-hand-thumbs-up "></i><p className='fs-5'> <b>Recommended Groups</b> </p>
                                    </div>
                                    <div className='mt-5 d-flex align-items-center justify-content-between '>
                                        <div className='d-flex align-items-center '>
                                            <img style={{ width: "60px", height: "60px" }} src={ava} alt="" />
                                            <p className='p-2 fs-4 '>Leisure</p>
                                        </div>
                                        <button type="button" class="btn btn-secondary rounded-pill btn-sm">Follow</button>
                                    </div>
                                    <div className='mt-5 d-flex align-items-center justify-content-between '>
                                        <div className='d-flex align-items-center '>
                                            <img style={{ width: "60px", height: "60px" }} src={ava} alt="" />
                                            <p className='p-2 fs-4 '>Leisure</p>
                                        </div>
                                        <button type="button" class="btn btn-secondary rounded-pill btn-sm">Follow</button>
                                    </div>
                                    <div className='mt-5 d-flex align-items-center justify-content-between '>
                                        <div className='d-flex align-items-center '>
                                            <img style={{ width: "60px", height: "60px" }} src={ava} alt="" />
                                            <p className='p-2 fs-4 '>Leisure</p>
                                        </div>
                                        <button type="button" class="btn btn-secondary rounded-pill btn-sm">Follow</button>
                                    </div>
                                    <div className='mt-5 d-flex align-items-center justify-content-between '>
                                        <div className='d-flex align-items-center '>
                                            <img style={{ width: "60px", height: "60px" }} src={ava} alt="" />
                                            <p className='p-2 fs-4 '>Leisure</p>
                                        </div>
                                        <button type="button" class="btn btn-secondary rounded-pill btn-sm">Follow</button>
                                    </div>
                                    <div className='mt-5 d-flex align-items-center justify-content-between '>
                                        <div className='d-flex align-items-center '>
                                            <img style={{ width: "60px", height: "60px" }} src={ava} alt="" />
                                            <p className='p-2 fs-4 '>Leisure</p>
                                        </div>
                                        <button type="button" class="btn btn-secondary rounded-pill btn-sm">Follow</button>
                                    </div>
                                </div>

                            </>



                        )}


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Posts