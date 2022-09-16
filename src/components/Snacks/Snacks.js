import Boba from "../../assets/images/boba.png"
import Cookie from "../../assets/images/cookie.png"
import "./Snacks.css"

const Snacks = () => {
  return (
    <div className="snack-table">
        <img className="snack-icon" src={Boba} alt="Cup of Boba Milk Tea Icon"></img>
        <img className="snack-icon" src={Cookie} alt="Cup of Coffee Icon"></img>
    </div>
  )
}

export default Snacks