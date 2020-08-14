import React from "react";

function User() {
    return (
        <div class="container">
            <div class="row">

                {/* <!--Details info--> */}
                <div class="col-sm-12 mt-5">
                    <div class="row">
                        <div class="col-sm-3">

                            <h6>Username</h6>
                        </div>
                        <div class="col-sm-7">
                            <h4>Ash</h4>
                        </div>
                        <div class="col-sm-2">
                            <h7>Edit</h7>
                        </div>
                    </div>

                    <hr />
                    {/* <!--section2--> */}
                    <div class="row">
                        <div class="col-sm-3">

                            <h6>Email</h6>
                        </div>
                        <div class="col-sm-7">
                            <h7>adc@gmail.com</h7>
                        </div>
                        <div class="col-sm-2">
                            <h7>Edit</h7>
                        </div>
                    </div>
                    <hr>
                    </hr>
                    {/* <!--section3--> */}
                    <div class="row">
                        <div class="col-sm-3">
                            <h6>Favorites</h6>

                        </div>
                        <div class="col-sm-7">
                            <ul>
                                <li>Pizza</li>
                                <li>Pasta</li>
                            </ul>
                        </div>
                        <div class="col-sm-2">
                            <h7>Edit</h7>
                        </div>
                    </div>
                    <hr>
                    </hr>
                    {/* <!--section4--> */}
                    <div class="row">
                        <div class="col-sm-3">
                            <h6>Delete</h6>

                        </div>
                        <div class="col-sm-7">
                            <p>Check details</p>
                        </div>
                        <div class="col-sm-2">
                            <h6>Edit</h6>
                        </div>
                        <hr>
                        </hr>
                    </div>

                </div>
            </div>
        </div>

    );
}