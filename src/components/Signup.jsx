import React from "react";

function Signup() {
	return (
		<div class="modal fade" id="myModal" role="dialog">
			<div class="modal-dialog">
				{/* <!-- Modal content--> */}
				<div class="modal-content">
					<div class="modal-header">
						<h4>SignUp</h4>
						<button type="button" class="close" data-dismiss="modal">
							&times;
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-row">​</div>
							<div class="form-group">
								<label for="InputEmail">
									<span class="fa fa-envelope" id="em1"></span>Email
								</label>

								<input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
								<small id="emailHelp" class="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
							</div>
							<div class="form-group">
								<label for="usrname">
									<span class="fa fa-user" id="em1"></span>
									Username
								</label>
								<input type="text" class="form-control" id="usrname" placeholder="Enter username" />
							</div>
							<div class="form-group">
								<label for="psw">
									<span class="fa fa-key" id="em1"></span>
									Password
								</label>
								<input type="text" class="form-control" id="psw" placeholder="Enter password" />
							</div>
							<div class="form-group">
								<label for="psw">
									<span class="fa fa-key" id="em1"></span>
									Confirm Password
								</label>
								<input type="text" class="form-control" id="psw" placeholder="Enter password" />
							</div>
							<div class="checkbox">
								<label>
									<input type="checkbox" value="" checked />
									Remember me
								</label>
							</div>
							<button type="submit" class="btn btn-success btn-block">
								<span class=""></span>Sign Up
							</button>
						</form>
					</div>
					<div class="modal-footer">
						<button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">
							<span class="glyphicon glyphicon-remove"></span>
							Cancel
						</button>
						<p>
							Not a member? <a href="#">Sign Up</a>
						</p>
						<p>
							Forgot <a href="#">Password?</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;