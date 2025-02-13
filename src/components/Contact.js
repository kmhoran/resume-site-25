import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="contact-frame">
      <div id="platform-links">
        <a href="https://github.com/kmhoran">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kevin-michael-horan/">
          <FaLinkedin />
        </a>
        <a href="https://discord.com/users/691039634217762866">
          <FaDiscord />
        </a>
        <a href="https://x.com/real_kmhoran">
          <FaSquareXTwitter />
        </a>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfTQdA78-hMNYhuPRSLIV0PE6hn5UpG8bwDdkbds7Yxccn7tA/viewform?embedded=true"
        id="google-form"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </section>
  );
};

export default Contact;
