import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub color="#000000" />, path: "" },
  { icon: <FaLinkedinIn color="#000000" />, path: "" },
  { icon: <FaYoutube color="#000000" />, path: "" },
  { icon: <FaTwitter color="#000000" />, path: "" },
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
