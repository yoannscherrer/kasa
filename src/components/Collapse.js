import { useState } from "react";
import arrow from "../assets/arrow.png"; 
import "../styles/apropos.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header">
        <span className="collapse-title">{title}</span>
        <img
          src={arrow}
          alt="Toggle Collapse"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;