import { useState } from 'react';
import './collapse.css';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <section className='collapse'>
            <header onClick={toggleCollapse}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </header>

            {isOpen && (
                <ul>
                    <li className='open'>{content}</li>
                </ul>
            )}
        </section>
    );
};

export default Collapse;
