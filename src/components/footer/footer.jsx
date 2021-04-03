import "./footer.scss"
import {Contact} from "./contact";

export const Footer = (props) => {
  return (
    <div className={"FooterContainer"}>
      <Contact/>
      <div className='footer'>
          <p>
          www.sitelink.com
            <a href='http://www.sitelink.com' rel='nofollow'>
            </a>
          </p>
      </div>
    </div>
  )
}
