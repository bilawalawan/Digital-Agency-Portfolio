import Image from "next/image"
import img from "../../../public/img/cardlogo.png"

export default function Idcards(props) {
    return (

        <div className=" col-sm-6 col-lg-4  text-center">
            <Image src={img} />
            <h3 className="mt-4">{props.title}</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodtempor
                incididunt ut labore et dolore
            </p>
        </div>

    )
}
