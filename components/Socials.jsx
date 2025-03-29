import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub color="#111111" />, path: "" },
  { icon: <FaLinkedinIn color="#111111" />, path: "" },
  { icon: <FaXTwitter color="#111111" />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
