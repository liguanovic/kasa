import { useState } from "react";
import "./collapse.css";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <section className="collapse">
      <header onClick={toggleCollapse}>
        <h2>{title}</h2>
        <i className={`fa-solid fa-lg fa-chevron-${isOpen ? 'up' : 'down'} ${isOpen ? 'rotate' : ''}`}></i>
      </header>

      {isOpen && (
        <ul>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <li key={index} className={isOpen ? 'open' : ''}>
                {item}
              </li>
            ))
          ) : (
            <li className={isOpen ? 'open' : ''}>
              {content}
            </li>
          )}
        </ul>
      )}
    </section>
  );
};

export default Collapse;
