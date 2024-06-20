import { useState } from "react";
import "./collapse.css";

    const Collapse = ({ title, content }) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggleCollapse = () => setIsOpen(!isOpen);

        return (
          <section className="collapse">
            <header onClick={toggleCollapse}>
            <h2>{title}</h2>
            <i className={`fas fa-chevron-${isOpen ? "down" : "up"}`}></i>
            </header>

            { isOpen && (title ? (
            <ul>
              <li className={isOpen ? 'open' : ""}>{content}</li>

            </ul> 
        ) : (
            <ul>
              <li className={isOpen ? 'open' : ""}>{content}</li>
            </ul>
          ))}
          </section>
        );
      };

export default Collapse