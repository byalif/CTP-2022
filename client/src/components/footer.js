import React from 'react'
import { SocialLinks } from './social-links'

export default function Footer() {
  return (
    <footer className="bg-primary-400 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-gray-400">
      <div className="container">
      <div className="pb-5 row px-6">  
        <div className="logo-footer col-5">iWardrobe</div>
        <div className="col-5 p-0"></div> 
        <SocialLinks className="socials mb-6 inline-flex w-full col lg:flex p-0" />
      
      </div>
      <div className="row px-6">
        <div className="col-5">
          <h3>Address</h3>
          <p>123 Some Rd,</p>
          <p>Triple Bay 1234</p>
          <p>New York, USA</p>
          <button className="mt-4"><a href="https://goo.gl/maps/qTAbHk59LEPNHX3w6">find on Map</a></button>
        </div>
        <div className="col-5">
          <h3>SiteMap</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Feed</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
        <div className="col-2">
          <h3>Contact</h3>
          <p>P: 1234 213 301</p>
          <p>E: contact@iwardrobe.com</p>
        </div>
      </div>

          {/* <NavLinks className="mb-6 inline-flex w-full flex-none justify-center lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end" />
          <SocialLinks className="mb-6 inline-flex w-full flex-none justify-center lg:flex lg:justify-end" /> */}
          <p className="my-5 inline-flex w-full flex-none  lg:w-1/2 lg:justify-start">
            &copy; 2022 iWardrobe, powered by Kristina Korzhenevskaya & Alif Rahi. All rights reserved
          </p>
      </div>
   
    </footer>
  )
}