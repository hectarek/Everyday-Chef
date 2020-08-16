import React from "react";

function Login() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6" id="login">
                    <h2>Log In </h2>
                    <form>
                        <div class="form-group">
                            <label for="InputEmail1">
                                <span class="fa fa-envelope" id="em1"></span>UserName
							</label>
                            <input type="username" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
                        </div>
                        <div class="form-group">
                            <label for="InputPassword1">
                                <span class="fa fa-key" id="em1"></span>Password
							</label>
                            <input type="password" class="form-control" id="InputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">
                                Check me out
							</label>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
						</button>
                    </form>
                </div>
                {/* <!--Splitup signup--> */}
                <div class="col-md-6" id="signup">
                    <h2 class="head">
                        Everyday <span id="chef">Chef</span>
                    </h2>
                    <h5 id="info">Begin Your Everyday Chef Journey Today</h5>
                    {/* <!-- Trigger the modal with a button --> */}
                    <button type="button" class="btn btn-primary btn-lg" id="myBtn">
                        SignUp
					</button>
                </div>
            </div>
        </div>
    );
}
export default Login;