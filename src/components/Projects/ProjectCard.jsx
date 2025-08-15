/* eslint-disable react/prop-types */
import Github from "../../assets/Icons/Github";
import Link from "../../assets/Icons/Link";
// export default function ProjectCard({
//   name,
//   tools,
//   image,
//   details,
//   liveLink,
//   githubLink,
// }) {
//   return (
//     <div className="project-card">
//       <h3>{name}</h3>
//       <div className="project-tools">
//         {tools.map((tool, i) => {
//           return (
//             <div key={i} className="tool-card">
//               {tool}
//             </div>
//           );
//         })}
//       </div>
//       <div className="project-image">
//         <img
//             src={image}
//             alt={name}

//           />
//       </div>
//       <div className="project-info">
//         <p>{details}</p>
//       </div>
//       <div className="project-icons">
//         {liveLink && <div className="live">
//           <p>
//             <a href={liveLink} target="_blank" rel="noopener noreferrer">
//               Live <Link />
//             </a>
//           </p>
//         </div>}
//         {githubLink && <div className="github">
//           <p>
//             <a href={githubLink}target="_blank" rel="noopener noreferrer">
//               Code <Github />
//             </a>
//           </p>

//         </div>}
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function ProjectCard({
  name,
  tools,
  image,
  details,
  liveLink,
  githubLink,
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3>{name}</h3>

      {/* <ul className="tools-list">
        {tools.map((tool, idx) => (
          <li key={idx}>{tool}</li>
        ))}
      </ul> */}
      <div className="project-tools">
        {tools.map((tool, i) => {
          return (
            <div key={i} className="tool-card">
              {tool}
            </div>
          );
        })}
      </div>

      <motion.img
        src={image}
        alt={name}
        className="project-image"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <p>{details}</p>

      {/* <div className="linkss">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer">
            Live <Link/>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            GitHub <Github/>
          </a>
        )}
      </div> */}
      {/* <div className="project-icons">
        {liveLink && (
          <div className="live">
            <p>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                Live <Link />
              </a>
            </p>
          </div>
        )}
        {githubLink && (
          <div className="github">
            <p>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                Code <Github />
              </a>
            </p>
          </div>
        )}
      </div> */}
    </motion.div>
  );
}
