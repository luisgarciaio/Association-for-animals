import { Link } from "react-router-dom"

const Btn_Link = ({location,color,text}) => {
  return (
    <div className="animate-slide-out flex items-center justify-center md:justify-end pb-6 m-10">
        <Link to={location} className='btn bg-base-100 border-black'>{text}</Link>
    </div>
  )
}

export default Btn_Link