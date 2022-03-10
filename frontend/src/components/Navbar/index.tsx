import {ReactComponent as GitHubIcon} from 'assets/img/Vector.svg'
import './styles.css';
function Navbar(){

    return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
            <div className="dsmovie-contact-container">
              <h1>DSMovie</h1>
              <div className="DSMovie-git-container">
                <GitHubIcon/>
                <p>/devsuperior</p>
              </div>
            </div>  
          </a>
        </div>  
      </nav>
    </header>
    )
}

export default Navbar;