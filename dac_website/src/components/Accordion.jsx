import { useState } from 'react';
import './Accordion.css';
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span className={`accordion-icon ${index === activeIndex ? 'active' : ''}`}>
              {index === activeIndex ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />}
            </span>
          </div>
          {index === activeIndex && <div className="accordion-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
