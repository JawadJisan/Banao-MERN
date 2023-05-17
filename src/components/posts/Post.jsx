import React from 'react'

const Post = ({ data }) => {
    const { image, type, heading, details, user, views, id, avater } = data;

    return (
        <>
            <div className='w-100 mt-5 border rounded-3'>
                <img src={image} style={{ width: "100%" }} alt="" />
                <p> {type} </p>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className="row">
                        <div className="col-8">
                            <h4> {heading} </h4>
                        </div>
                        <div className="col-4">
                            {/* <span className='fs-1 fw-bold ' >...</span> */}

                            <div className="dropdown">
                                <button className="btn btn-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className='fs-1 fw-bold ' >...</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="">Edit </a></li>
                                    <li><a className="dropdown-item" href="">Report</a></li>
                                    <li><a className="dropdown-item" href="">Option 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "full" }} className='text-secondary'> {details} </p>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={avater} style={{ width: "50px", height: "50px" }} alt="Avater" />
                        <p className='p-3' > <b> {user} </b> </p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>

                        <span>
                            <svg className='m-3 bi bi-eye ' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                            <span>
                                {views}
                            </span>
                        </span>


                        <svg className='m-3 bi bi-share' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post