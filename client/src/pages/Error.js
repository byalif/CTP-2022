import React from "react";
import Img from '../Img'
import Layout  from '../components/layout'

function Error(props) {
  return (
    <Layout>
      <div className="col text-center py-6">
        <div className="d-flex align-items-center py-6">
            <span className=" d-flex bold-header-text px-4 ">Have you seen </span>
            <span className="d-flex regular-header-text">My Clothes?</span>
        </div>
        <div className=" sweater-container mb-6 position-relative d-flex justify-content-center py-6">
            <span className="error-element">404</span>
            <Img alt="Blue sweater hanging" src={`${props.avatar}`} 
            defaultSrc={require('../assets/error_page.png')}/>
        </div>
      </div>
    </Layout>
  );
}

export default Error;
