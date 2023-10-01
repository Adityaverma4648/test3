import {AiOutlineLoading3Quarters} from "react-icons/ai";

const Loader = () => {
  return (
    <div className='text-danger h-100 w-100 d-flex justify-content-center align-items-center' >
        <AiOutlineLoading3Quarters size={"35px"} className="spin" />
    </div>
  )
}

export default Loader