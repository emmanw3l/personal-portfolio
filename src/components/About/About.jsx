/* eslint-disable react/no-unescaped-entities */
// import aboutImg from "../../assets/img/img1.jpeg";
// import { illustration } from "../../helper/icons";
import illustrate from "../../assets/illustrate.json";
import "./About.css";
import { myLinks } from "../../helper/links";
import { motion } from "framer-motion";
import { variants1, variants3 } from "../../animations/variants";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";

export default function About() {
  return (
    <main id="about">
      <section className="about-info">
        <div className="header">
          <motion.h2
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1}
          >
            About Me
          </motion.h2>
          <motion.p
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={2}
          >
            <div className="header-bar"></div>Who I Am And What I Do
          </motion.p>
        </div>
        <div className="about-det">
          <motion.div
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={3}
            className="about-img"
          >
            <Lottie animationData={illustrate} className="about-animation" />

            {/* <DotLottieReact src="src\assets\illustrate.json" loop autoplay /> */}
            {/* <img src={illustrate} alt="emmanuel" /> */}
            {/* <img src={aboutImg} alt="emmanuel" /> */}
          </motion.div>
          <div className="about-text">
            <motion.div
              variants={variants1}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={4}
              className="info"
            >
              <p>
                I'm a dedicated and experienced self-taught full-stack web
                developer based in Anambra, Nigeria. I’m passionate about
                building scalable and efficient applications that enhance user
                experience and solve problems.
              </p>
              <p>
                When I'm not building, you can often find me playing chess,
                reading books, writing poetry, taking a stroll, and more often
                than not listening to music. To say i'm obsessed would be the
                understatement of the decade.
              </p>
              <p className="last">
                <span>
                  <a href={myLinks.whatsapp}>Get in touch, </a>
                </span>
                and let's create something amazing or just chat about nothing,
                your choice.
              </p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              className="about-contact"
            ></motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
