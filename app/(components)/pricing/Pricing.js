import Image from "next/image"
import logoimg from '../../../public/img/cardlogo.png'
import Button from "../Button/button"

export default function Pricing(props) {
    return (
        <div className='col-lg-4 col-sm-6  text-center mb-5' style={props.style} >
            <div className='price-card p-5'>
                <h3>{props.title}</h3>
                <Image src={logoimg} />
                <p><span className="fw-bold fs-3" style={props.priceStyle}>{props.price}</span>/Monthly</p>
                <p >Graphic Design <br/>
                    Web Design <br/>
                    UI/UX <br/>
                    HTML/CSS <br/>
                    SEO Marketing <br/>
                    Business Analysis <br/>
                </p>
                <Button style={props.btnStyle} text={props.text }/>
            </div>
        </div>
    )
}
