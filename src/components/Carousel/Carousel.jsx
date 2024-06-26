import { useState } from 'react';
import arrowLeft from '../../assets/arrowleft.png';
import arrowRight from '../../assets/arrowright.png';

import './carousel.css';

/**
 * Renders a carousel component that displays a list of pictures and allows navigation between them.
 *
 * @param {Array} pictures - An array of URLs or paths to the pictures to be displayed in the carousel.
 * @param {string} alt - The alt text for the image element.
 * @return {JSX.Element} The carousel component.
 */
const Carousel = ({ pictures, alt }) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((index + 1) % pictures.length);
    };

    const prev = () => {
        setIndex((index - 1 + pictures.length) % pictures.length);
    };

    return (
        <figure className='carousel'>
            <img src={pictures[index]} alt={`${index + 1}/${pictures.length}`} />

            {pictures.length > 1 && (
                <nav className='arrow'>
                    <img src={arrowLeft} className='arrow-left' alt='Arrow left' onClick={prev} />
                    <img src={arrowRight} className='arrow-right' alt='Arrow right' onClick={next} />
                    <p>
                        {index + 1}/{pictures.length}
                    </p>
                </nav>
            )}
        </figure>
    );
};

export default Carousel;
