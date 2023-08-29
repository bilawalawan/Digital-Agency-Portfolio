import Image from "next/image";
import Abouts from "./(components)/Abouts/Abouts";
import Header from "./(components)/header/header";
import Idcards from "./(components)/idCard/idCards";
import Portfolio from "./(components)/portfolios/Portfolios";
import Service from "./(components)/services/service";

import onof from "../public/img/onof.png"
import Pricing from "./(components)/pricing/Pricing";
import Clients from "./(components)/client/Clients";


import womenimg from "../public/img/women.jpg"
import menimg from "../public/img/men.jpg"

import Blogs from "./(components)/blogArea/Blogs";
import Footer from "./(components)/footer/Footer";

export default function Home() {

  return (
    <>
      {/* Our Company Home Page */}
      <Header></Header>
      {/* Services and About Section */}
      <div className="container">
        <Service />
        <Abouts />
      </div>

      {/* Our Agency Plans */}
      <div className="container-fluid business-model">
        <div className="container inside mx-auto">
          <div className="row">
            <Idcards title="Smart Planning" />
            <Idcards title="Our partnership" />
            <Idcards title="Super ideas" />
          </div>
        </div>
      </div>
      <Portfolio />

      {/* Pricing Section */}

      <section className="container mt-5">
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-6 mb-5">
            <h3 className="text-primary mt-3">Our Pricing</h3>
            <h2 className="fw-bold mt-3">Choose A Plan That’s Right For You</h2>
          </div>
          <div className="col-lg-6 col-sm-6 text-end mt-4">
            <span className="text-primary">Monthly</span>
            <span>
              <Image src={onof} />
            </span>
            <span>Yearly</span>
          </div>
        </div>
        <div className="row">
          <Pricing priceStyle={{ color: 'blue' }} style={{ background: '#FFF', color: 'black' }} title="Basic Plan" price="$50" text="Start Now" />
          <Pricing btnStyle={{ background: 'white', color: 'blue' }} style={{ background: '#2370C8', color: 'white' }} title="Standard Plan" price="$100" text="Start Now" />
          <Pricing priceStyle={{ color: 'blue' }} style={{ background: '#FFF', color: 'black' }} title="Premium Plan" price="$150" text="Start Now" />
        </div>
      </section>

      {/* Trusted Client */}

      <section className="container-fluid bg-primary text-center text-white p-5 mt-5 mb-5">
        <div className="container">
          <h1 className="mt-5 mb-5">We’re trusted by clients.</h1>
          <div className="row">

            <Clients src={womenimg} title="Mina Whatson" text="CONSULTANT" />
            <Clients src={menimg} title="Edward Hunter" text="IT SPCIALIST" />

          </div>
        </div>
      </section>

      {/* Our Agency Blog Area */}

     <Blogs/>

     {/* Footer Area of Web Page */}

     <Footer/>

    </>
  )
}
