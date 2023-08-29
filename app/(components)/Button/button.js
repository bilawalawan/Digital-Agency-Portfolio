

export default function Button(props) {
  return (
    <button className="myBtn mt-4" style={props.style}>{props.text}</button>
  )
}
