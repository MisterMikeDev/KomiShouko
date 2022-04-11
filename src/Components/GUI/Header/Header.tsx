import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div className="Header">
      <div className="Links">
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/commands">Commands</Link>
        <Link className="Link" to="/developer">Developer</Link>
        <Link className="Link" to="/about">About</Link>
        <Link className="Link" to="/invite">Invite</Link>
        <Link className="Link" to="/support">Support</Link>
      </div>
    </div>
  );
};
