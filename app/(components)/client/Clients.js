import Image from "next/image"


export default function Clients(props) {
    return (
        <div className="col-lg-6 col-sm-12 mb-4">
            <div className="client-card text-center">
                <Image src={props.src} className="rounded-circle" width="100" height="100"/>
                <h3 className="mt-4">{props.title}</h3>
                <h6 className="mt-4">{props.text}</h6>
                <p className="mt-3">There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, </p>
            </div>
        </div>
    )
}
