
import Image from "next/image"

export default function ServiceCard(props) {
  return (
    <div className="col">
    <div className="card-body2 text-center ">
        <Image src={props.src} width='150' height='150' className="rounded-circle" />
        <h3 className="mt-4">{props.title}</h3>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmodtempor
            incididunt ut labore et dolore
        </p>
        
    </div>
</div>
  )
}
