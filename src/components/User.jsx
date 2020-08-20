import React from "react";
import { Icon } from "@iconify/react";
import bxEdit from "@iconify/icons-bx/bx-edit";

function User({ user }) {
	return (

		<div className="app-container container">
			<div className="row">

				{/* <!--Details info--> */}
				<div className="col-sm-6 mb-5 mt-4 offset-3" id="myinfo">
					<h1 className="text-center mb-4" id="profile-head">Profile</h1>
					<div>
						<img
							src="data:image/jpeg;base64,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"
							alt="Avatar"
							className="rounded mx-auto d-block"
						></img>
					</div>
					<div className="row mt-5">
						<div className="col-sm-3">
							<h6>Name</h6>
						</div>
						<div className="col-sm-7">
							<h4>{user.firstName} {user.lastName}</h4>
						</div>
						<div className="col-sm-2">
							<h6>
								Edit <Icon icon={bxEdit} />
							</h6>
						</div>
					</div>

					<hr />
					{/* <!--section2--> */}
					<div className="row">
						<div className="col-sm-3">
							<h6>Username</h6>
						</div>
						<div className="col-sm-7">
							<h4>{user.userName}</h4>
						</div>
						<div className="col-sm-2">
							<h6>
								Edit <Icon icon={bxEdit} />
							</h6>
						</div>
					</div>
					<hr></hr>
					{/* <!--section4--> */}
					<div className="row">
						<div className="col-sm-3">
							<h6>Email</h6>
						</div>
						<div className="col-sm-7">
							<p>{user.email}</p>
						</div>
						<div className="col-sm-2">
							<h6>
								Edit <Icon icon={bxEdit} />
							</h6>
						</div>
						<hr></hr>
					</div>
				</div>
			</div>
		</div>
	);
}

export default User;
