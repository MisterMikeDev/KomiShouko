import { useEffect, useState } from "react";
import { Loading } from "../Router/PathManager";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <title>Komi Shouko | Home</title>
      <h1 className="TitlePage">Komi Shouko</h1>
      <img
        className="KomiImage"
        src="https://cdn.discordapp.com/attachments/889575240617852989/962547054322778182/KomiLogo.png"
        alt="Komi Logo"
      />
    </div>
  );
};

export const LazyHome = () => {
  const [show, setShow] = useState(false);
  useEffect((): void => {
    const onChange = (entries: any): void => {
      const ElementOnChange = entries[0];
      if (ElementOnChange.isIntersecting) {
        setShow(true);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });
    observer.observe(document.getElementById("LazyHome") as Element);
  }, []);
  return <div id="LazyHome">{show ? <Home /> : <Loading />}</div>;
};
