import { useState } from 'react';

import './collapse.css';

/**
 * Renders a collapsible component with a title and content. Clicking the title toggles the visibility of the content.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the collapsible component.
 * @param {string|Array<string>} props.content - The content to be displayed when the component is open. Can be a string or an array of strings.
 * @return {JSX.Element} The collapsible component.
 */
const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <section className='collapse'>
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
