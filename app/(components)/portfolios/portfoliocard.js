

export default function Portfoliocard(props) {
  return (
    <div className='col-lg-4 col-sm-6 g-4 ' >
        <div className='portfolio'>
            <h5 className='text-center text-white'>{props.title}</h5>
        </div>
    </div>
  )
}
