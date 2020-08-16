import React from "react";

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" id="login">
                    <h2>Log In </h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="InputEmail1">
                                <span className="fa fa-envelope" id="em1"></span>UserName
							</label>
                            <input type="username" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword1">
                                <span className="fa fa-key" id="em1"></span>Password
							</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
							</label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
						</button>
                    </form>
                </div>
                {/* <!--Splitup signup--> */}
                <div className="col-md-6" id="signup">
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
    );
}
export default Login;