import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const onGithubLinkedinClickHandler = (link) => {
    window.open(link, "_blank");
  }

  return ( 
    <footer className="footer-container">
      <div className="footer-content flex">
        <div className="footer-title-container container">
          <h2 className="footer-title">BookLook</h2>
        </div>

        <div className="footer-linkedin-github flex">
          <div className="github flex" onClick={() => onGithubLinkedinClickHandler("https://github.com/fcram7")}>
            <GitHubIcon />
            <span> Github</span>
          </div>
          <div className="linkedin flex" onClick={() => onGithubLinkedinClickHandler("https://www.linkedin.com/in/fachriachmadmaulana/")}>
            <LinkedInIcon />
            <span>Linkedin</span>
          </div>
        </div>

        <div className="footer-developed-by-container container">
          <h2 className="footer-developed-by">Developed by Fachri Achmad Maulana</h2>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;