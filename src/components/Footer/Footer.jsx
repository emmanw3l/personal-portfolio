import "./Footer.css";
import instagram from "../../assets/Icons/instagram";
import Gmail from "../../assets/Icons/Gmail";
import Github from "../../assets/Icons/Github";
import Whatsapp from "../../assets/Icons/Whatsapp";
import { myLinks } from "../../helper/links";

export default function Footer() {
  return (
    <div className="footer">
      <main id="footer">
        <section className="footer-info">
          <div className="text">
            <div className="logo">
              <p>
                <a href="#">Emmanuel.</a>
              </p>
            </div>
            <div className="links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="home-links">
              <div className="btn github">
                <a href={myLinks.github}>
                  <Github />
                </a>
              </div>
              <div className="btn linkedin">
                <a href={myLinks.instagram}>
                  <instagram />
                </a>
              </div>
              <div className="btn gmail">
                <a href={myLinks.gmail}>
                  <Gmail />
                </a>
              </div>
              <div className="btn whatsapp">
                <a href={myLinks.whatsapp}>
                  <Whatsapp />
                </a>
              </div>
            </div>
            <p>
              <span>©</span> 2025 Nwabueze Emmanuel. All Rights Reserved
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
