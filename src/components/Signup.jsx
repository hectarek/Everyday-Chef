import React from "react";
import "../style/Signup.css"

function Signup({ modal, hideModal }) {

	console.log(modal);

	if (!modal) {
		return null;
	} else {
		return (
			<div className="modal-container">
					<div className="modal-content">
						<div className="modal-header">
							<h4>SignUp</h4>
							<button type="button" className="close">
								&times;
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-row">​</div>
								<div className="form-group">
									<label htmlFor="InputEmail">
										<span className="fa fa-envelope" id="em1"></span>Email
									</label>

									<input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
									<small id="emailHelp" className="form-text text-muted">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="usrname">
										<span className="fa fa-user" id="em1"></span>
										Username
									</label>
									<input type="text" className="form-control" id="usrname" placeholder="Enter username" />
								</div>
								<div className="form-group">
									<label htmlFor="psw">
										<span className="fa fa-key" id="em1"></span>
										Password
									</label>
									<input type="text" className="form-control" id="psw" placeholder="Enter password" />
								</div>
								<div className="form-group">
									<label htmlFor="psw2">
										<span className="fa fa-key" id="em1"></span>
										Confirm Password
									</label>
									<input type="text" className="form-control" id="psw2" placeholder="Enter password" />
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox" value="" />
										Remember me
									</label>
								</div>
								<button type="submit" className="btn btn-success btn-block">
									<span className=""></span>Sign Up
								</button>
							</form>
						</div>
						<div className="modal-footer">
							<button 
								type="submit" 
								className="btn btn-danger btn-default pull-left"
								onClick={e => hideModal()}
								>
								<span className="glyphicon glyphicon-remove"></span>
								Cancel
							</button>
							<p>
								Not a member? Sign Up
							</p>
							<p>
								Forgot Password?
							</p>
						</div>
					</div>
			</div>
		);
	}
}

export default Signup;
