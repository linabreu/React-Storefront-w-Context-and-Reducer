import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function Footer() {
  return (
<div className="d-flex flex-column">
  <footer className="dk-teal">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
          <p className="fs-2 branded-white">MidMod</p>
          <h6 className="text-uppercase font-weight-bold mb-4 text-light ">FOLLOW US</h6>
          <ul className="list-inline mt-4">
            <li className="list-inline-item text-light"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><FaFacebook className = "white-icon"/></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><FaTwitter className = "white-icon"/></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><AiFillInstagram className = "white-icon"/></a></li>
            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><FaTiktok className = "white-icon"/></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-light">Customer Service</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Track Your Order</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Returns</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Shipping Information</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">International Orders</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-light">Our Company</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Store Locations</a></li>
            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Corporate Headquarters</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4 text-light">Newsletter</h6>
          <p className="text-light mb-4">Join Our Email List</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
              <div className="input-group-append bg-orange">
                <button id="button-addon1" type="submit" className="btn bg-orange email-btn"><IoIosSend className = "white-icon"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="super-dk-teal py-4">
      <div className="container text-center">
        <p className="text-light mb-0 py-2">© 2023 MidMod All rights reserved.</p>
      </div>
    </div>
  </footer>

</div>
  )
}

export default Footer