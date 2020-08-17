import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container-fluid">
            <div className="row login-container">
                <div className="col-md-6 login" id="login">
                    
                    <form className='login-form'>
                    <h2>Log In </h2>
                        <div className="form-group">
                            <label htmlFor="InputEmail1">
                                <span className="fa fa-envelope" id="em1"></span>UserName
							</label>
                            <input type="username" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword1">
                                <span className="fa fa-key" id="em2"></span>Password
							</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
							</label>
                        </div>
                        <Link to="recipes">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </Link>
                        
                    </form>
                </div>
                {/* <!--Splitup signup--> */}
                <div className="col-md-6 signup" id="signup">
                    <div className="signup-items">   
                    <h2 className="head">
                        Everyday <span id="chef">Chef</span>
                    </h2>
                    <h5 id="info">Begin Your Everyday Chef Journey Today</h5>
                    {/* <!-- Trigger the modal with a button --> */}
                    <button type="button" className="btn btn-primary btn-lg" id="myBtn">
                        SignUp
					</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Login;