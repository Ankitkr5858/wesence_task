import "./contact.scss"
import Icon4 from "./../../assets/images/icon_4.png"
import Icon5 from "./../../assets/images/icon_5.png"

export const Contact = (props) => {
  return (
      <div className='contact'>
        <div className="link">About Us</div>
        <div className="link">Contact Us</div>
        <div className="link">Terms of Use</div>
        <div className="link">Privacy Policy</div>
        <div className="socialLinks">
          <div className="item">Follow Us</div>
          <div className="item"><img src={Icon4} href="https://facebook.com"/></div>
          <div className="item"><img src={Icon5} href="https://yuetube.com"/></div>
        </div>
      </div>
  )
}
