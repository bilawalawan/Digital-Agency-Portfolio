import Image from "next/image"
import arrows from "../../../public/img/arrows.png"
import cardLogo from "../../../public/img/web.jpg"
import Marketing from "../../../public/img/digital.jpg"
import Designer from "../../../public/img/graphics.jpg"
import arrow1 from "../../../public/img/Arrow 1.png"
import ServiceCard from "../serviceCard/serviceCard"

export default function Service() {
    return (
        <div className="container mt-5 ">
            <h5 className="text-center mt-5 pt-lg-5 text-primary">
                OUR SERVICES</h5>
            <div className="row mt-5  ms-5 ">
                <div className="col-lg-6 col-sm-12  pt-2 mt-4 text-lg-end ">
                    <h3 className="fw-bolder">We Are Providing Digital Services</h3>
                </div>
                <div className="col-lg-6 col-sm-12 text-lg-end text-sm-start">
                    <Image src={arrows} />
                </div>
            </div>
            <div className="row mt-5 ">
                <div className="col">
                    <div className="card-body1 text-center position-relative">
                        <Image src={cardLogo} width='150' height='150' className="rounded-circle" />
                        <h2 className="mt-4">Web Developer</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmodtempor
                            incididunt ut labore et dolore
                        </p>
                        <div className="card-arrow">
                            <Image src={arrow1} width="10" height="10"
                                className="bg-primary p-3 position-absolute top-100 start-50 translate-middle
                                  rounded-circle" />
                        </div>

                    </div>
                </div>
                <ServiceCard src={Designer} title="Graphics Designer"/>
                <ServiceCard src={Marketing} title="Digital Marketing"/>
                
            </div>
        </div>
    )
}
