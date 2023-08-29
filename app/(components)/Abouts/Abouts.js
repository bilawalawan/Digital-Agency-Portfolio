import Button from "../Button/button";
import Image from "next/image";

import aboutImag from '../../../public/img/about.jpg'


export default function Abouts() {
    return (
        <div className="container mb-5 ">
            <div className="row mt-5">
                <div className="col-lg-6 about-pic pe-4">
                    <Image src={aboutImag} width='343' height='310'/>
                </div>
                <div className="col-lg-6 ps-5 mt-4">
                    <h5 className=" mt-2 pt-lg-5 text-primary">ABOUT US</h5>
                    <h2 className="mt-4">We design, build brands
                        & digital projects.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit <br/><br/>

                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident,</p>
                        <Button text="Read More"/>
                </div>
            </div>
        </div>
    )
}
