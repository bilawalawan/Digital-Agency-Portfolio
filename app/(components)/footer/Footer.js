import Footerlist from "./Footerlist";


export default function Footer() {
    return (
        <section className="container-fluid footer">
            <div className="container footer1">
                <div className="row">
                    <div className="col-lg-3 col-sm-4">
                        <h2 className="fw-bold text-primary mb-4 ">AWAN.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ea commodo consequat.
                        </p>
                        {/* Footer Loader Images */}
                        <div className="loader">
                            <div className="footer-circle"></div>
                            <div className="footer-circle1"></div>
                            <div className="footer-circle1"></div>
                        </div>
                    </div>
                    <Footerlist title='Our Links' text='Home' text1='About Us' text2='Services' text3='Team' text4='Blog' />
                    <Footerlist title='Our Company' text='About Company' text1='Our Testimonial' text2='Latest News' text3='Our Mission' text4='Get a Free Quot' />
                    <Footerlist title='Our Services' text='App Development' text1='Web Development' text2='Graphics Design' text3='Web Solution' text4='App Solution' />


                </div>

            </div>
            <hr></hr>
            <p className="text-center text-primary">@ Copyright 2020 Brandoxide. All rights reserved.</p>
            <hr></hr>
        </section>
    )
}
