// import React, { useState } from 'react';
// import FilterBar from './CarFilterBar';
// import CarList from './CarList';
// import LeftFilterBar from './LeftFilterBar';
// import './Carbuy.css';

// const CarBuy = () => {
//   const [sortOption, setSortOption] = useState('relevance');

//   return (
//     <div className="car-buy-container">
//       <LeftFilterBar setSortOption={setSortOption} />
//       <div style={{ flexGrow: 1 }}>
//         <FilterBar setSortOption={setSortOption} />
//         <CarList sortOption={sortOption} />
//       </div>
//     </div>
//   );
// };

// export default CarBuy;




import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FilterBar from './CarFilterBar';
import CarList from './CarList';
import LeftFilterBar from './LeftFilterBar';
import CarData from './CarData';
import './Carbuy.css';

const CarBuy = () => {
  const [sortOption, setSortOption] = useState('relevance');
  const { location } = useParams();

  const filteredCars = location ? CarData.filter(car => car.location === location) : CarData;

  return (
    <div className="car-buy-container">
      <LeftFilterBar setSortOption={setSortOption} />
      <div style={{ flexGrow: 1 }}>
        <FilterBar setSortOption={setSortOption} />
        <CarList sortOption={sortOption} cars={filteredCars} />
      </div>
    </div>
  );
};

export default CarBuy;
