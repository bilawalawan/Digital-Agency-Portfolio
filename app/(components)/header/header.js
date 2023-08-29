import React from 'react'
import Navbar from '../navbar/navbar'
import Button from '../Button/button'

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <section className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <h1 className="fw-bold  text-white mt-5">Creative <br/> Digital Agency</h1>
            <p className=" text-white fs-6 fw-lighter mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.</p>
              <Button text="Learn More" />
          </div>
        </div>
      </section>

    </div>
  )
}
