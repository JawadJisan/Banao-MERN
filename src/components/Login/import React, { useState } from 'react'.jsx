import React, { useState } from 'react'
import logo from "../../assets/whole.png"
import Login from '../Login/Login';
import SignUp from '../Login/SignUp'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {

    const [haveAccount, setHaveAccount] = useState(false);
    const handleSingIn = () => {
        setHaveAccount((prevState) => !prevState);
    };


    const [user, loading, error] = useAuthState(auth);

    if (user) {
        console.log(user, "current user")
    }


    const logout = () => {
        signOut(auth);
    };

    return (


        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control rounded-pill me-3" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"></input>
                    </form>
                </div>
                <div className="d-flex align-items-center">
                    {user ?
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user?.email}
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button onClick={logout} className="btn fw-bold btnText btn btn-light" type="button">Logout</button>
                                </li>
                            </ul>
                        </div>
                        :
                        <a href=""
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            className='text-decoration-none text-reset'><span className="me-3">Create account. <span className='fs-6 text-primary fw-bold'>It's free</span> </span></a>}
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>



            {/* <!-- Modal --> */}
            <div className="modal fade  " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content  ">
                        <div className="d-flex justify-content-end">
                            <button type="button"
                                className="btn-close d-flex align-items-center modal-btn "
                                data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body ">
                            {/* <Login /> */}
                            {!haveAccount ? <SignUp handleSingIn={handleSingIn} /> : <Login handleSingIn={handleSingIn} />}
                        </div>
                    </div>
                </div>
            </div>



            {/*  */}

            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg ">
                    <div class="modal-content">
                        <div class="modal-body">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Header