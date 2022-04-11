import "./Footer.css";
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="TextInfo">
        <div className="FooterTitleInfo">
          <h1 className="Palabra1">Komi</h1>
          <h1 className="Palabra2">Shouko</h1>
        </div>
        <p className="Information">
          <b>🌸 Komi Shouko 🌸</b> es una bot con el propósito de ayudar a los
          servidores donde se encuentre.
        </p>
        <small>
          &copy; <b>MrMikeDev</b> - 2022
        </small>
      </div>
      <div className="DeveloperLinks">
        <div className="ContainerLinks">
          <h2 className="TitleDeveloperLinks">
            <b>Sígueme en:</b>
          </h2>
          <a
            className="SocialLink"
            href="https://twitter.com/MrMike_Official"
            target="_blank"
          >
            <i className="fa-brands fa-twitter" />
          </a>

          <a
            className="SocialLink"
            href="https://discord.gg/9rvvC9XFvX"
            target="_blank"
          >
            <i className="fa-brands fa-discord" />
          </a>

          <a
            className="SocialLink"
            href="https://www.linkedin.com/in/mrmikedev-🍷-626259237/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>

          <a
            className="SocialLink"
            href="https://github.com/MisterMikeMC"
            target="_blank"
          >
            <i className="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
};
