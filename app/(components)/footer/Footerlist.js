

export default function Footerlist(props) {
  return (
    <div className="col-lg-3 col-sm-4">
        <h4 className='mb-4'>{props.title}</h4>
        <ul>
            <li className='text-black'>{props.text}</li> <br/>
            <li className='text-black '>{props.text1}</li> <br/>
            <li className='text-black'>{props.text2}</li> <br/>
            <li className='text-black'>{props.text3}</li> <br/>
            <li className='text-black'>{props.text4}</li> <br/>
        </ul>
    </div>
  )
}
