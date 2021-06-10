import '../styles/Links.css'

import gitHub from '../components/img/logos/github-brands.svg'
import home from '../components/img/logos/home-solid.svg'
import linkin from '../components/img/logos/linkedin-brands.svg'

function Links(){
    return (
    <div className="links-container">
        <div className="links-img">
            <a href="https://github.com/datalessuk/whentowakeup">
                <img src={gitHub} alt=""/>
            </a>
            
            <a href="http://www.markharrison.tech">
                <img src={home} alt=""/>
             </a>
            <a href="https://www.linkedin.com/in/mark-harrison-2a0638193/">
                <img src={linkin} alt=""/>
            </a>
            </div>
        </div>
    )
}


export default Links;