import React, { useState } from 'react';
import './Carousel.css'; // Ensure you have the appropriate styles for the carousel

interface Item {
  pos: number;
  content: string;
}

const Carousel: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { pos: -1, content: '1' },
    { pos: 1, content: '2' },
    { pos: 0, content: '3' },
  ]);

  const handleClick = (newActivePos: number) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const currentIndex = newItems.findIndex(item => item.pos === 0);
      const newActiveIndex = newItems.findIndex(item => item.pos === newActivePos);

      if (newActiveIndex === -1 || newActivePos === 0) return prevItems;

      return newItems.map(item => {
        const newPos = getPos(item.pos, newActivePos);
        return { ...item, pos: newPos };
      });
    });
  };

  const getPos = (current: number, active: number): number => {
    const diff = current - active;
    if (Math.abs(diff) > 2) {
      return -current;
    }
    return diff;
  };

  return (
    <div className="carousel">
      <ul className="carousel__list">
        {items.map(item => (
          <li
            key={item.pos}
            className={`carousel__item ${item.pos === 0 ? 'carousel__item_active' : ''}`}
            data-pos={item.pos}
            onClick={() => handleClick(item.pos)}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
