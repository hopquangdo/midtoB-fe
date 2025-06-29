import React, { useState } from 'react';

const Rating = ({reviewScore,setReviewScore}) => {
  const [hoveredStar, setHoveredStar] = useState(reviewScore || 0);
  const totalStars = 5; 

  const handleStarHover = (starIndex) => {
    setHoveredStar(starIndex);
  };

  const handleStarLeave = () => {
    setHoveredStar(reviewScore || 0);
  };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        (hoveredStar != 0 && index < hoveredStar ? (
          <svg key={index} className="w-6 h-6 text-yellow-500"aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24"fill="currentColor"viewBox="0 0 24 24"
            onMouseEnter={() => handleStarHover(index+1)}
            onMouseLeave={handleStarLeave}
            onClick={() => {setReviewScore(hoveredStar)}}>
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
          </svg>
        ) : (
            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                onMouseEnter={() => handleStarHover(index+1)}
                onMouseLeave={handleStarLeave}>
                <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
            </svg>
        ))
      ))}
    </div>
  );
};

export default Rating;
