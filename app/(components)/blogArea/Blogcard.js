import Image from "next/image"
import arrow from '../../../public/img/Arrow 1.png'

export default function Blogcard(props) {
    return (
        <div className="col-lg-4 mb-5">
            <div className='blog-card ' style={props.style}>
                <h6 className='fw-3' >Maecenas laoree efficiture sagittisaliquam eleifend nisl.</h6>
                <h6 className='mt-3 mb-3' style={props.span}>Posted 7 MArch, 2020</h6>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing
                    sed do eiusmod tempor incididunt labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident,
                </p>
                <button style={props.span} className='blog-btn'>Read More <Image src={arrow} /> </button>
            </div>
        </div>
    )
}
