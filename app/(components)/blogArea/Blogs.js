import Image from "next/image"
import arrow from "../../../public/img/Arrow 1.png"
import Blogcard from "./Blogcard"
export default function Blogs() {
    const blogCard1 = {
        background: '#3782D7',
        color: 'white'  
    }

    const blogCard2 = {
        border: '1px solid #3782D7',
background: '#FFF'  
    }
  return (
    <section className="container mt-5 mb-5">
    <div className="row">
      <div className="col-lg-4 mb-5">
        <h5 className=" mt-5 pt-lg-5 text-primary">
          OUR BLOG
        </h5>
        <h1 className="fw-bold">Letest News & Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
          sed do eiusmod tempor incididunt labo. </p>
          <div className="input-field ">
          <input placeholder="Enter Your Email"/>
          <span className="  input-span"> 
          <Image src={arrow}/> 
          </span>
          </div>
      </div>
     <Blogcard style={blogCard1}/>
     <Blogcard  span={{color:'blue'}} style={blogCard2}></Blogcard>
     
    </div>
  </section>
  )
}
