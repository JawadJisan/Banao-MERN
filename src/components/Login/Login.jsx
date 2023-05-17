import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import Group from "../../assets/Group-3.png"
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';



const Login = ({ handleSingIn }) => {
  const [currentuser] = useAuthState(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async () => {
    if (!currentuser) {
      await signInWithEmailAndPassword(email, password);

    } else {
      return
    }
  }

  return (
    <>
      <div className='loginHeadBackground'>
        <p className='loginHead text-center'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
      </div>

      <div className='d-flex justify-content-between align-items-center '>
        <h1 className='singIn' >Sign In</h1>

        <Link to="/">
          <button className="btn fw-bold btnText btn btn-light" type="button">
            <span
              data-bs-toggle="modal" data-bs-target="#exampleModal"
              className='text-decoration-none createNew text-reset'><span className="me-3">Don't have an account yet?<span className='text-primary fw-bold'>Create new for free</span> </span> </span></button>
        </Link>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <form onSubmit={onSubmit}>
              <div>
                <div className="form-group">
                  <input
                    required
                    type="email"
                    className="form-control mt-4 "
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group position-relative">
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}

                  />
                  <button className="btn newBTN btn-link position-absolute top-50 end-0 translate-middle-y password-toggle-btn" type="button" onClick={handlePasswordToggle}>
                    <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg> </i>
                  </button>
                </div>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary rounded-pill" type="submit">Sign In</button>
              </div>
            </form>
            <div className="d-grid gap-2 mt-4">

              <button
                onClick={() => signInWithFacebook()}
                className="btn  d-flex justify-content-center align-items-center btnText mt-3 btn-outline-secondary" type="button"> <svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi fbIcon bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg> Sign in with Facebook</button>

              <button
                onClick={() => signInWithGoogle()}
                className="btn d-flex justify-content-center align-items-center btnText btn-outline-secondary" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg> Sign in with Google</button>

              <button className="btn fw-bold btnText btn btn-light" type="button">Forgot Password?</button>
            </div>


          </div>


          <div className="col">
            <img src={Group} alt="" />
          </div>
        </div>
      </div >
    </>
  )
}

export default Login