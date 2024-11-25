import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FilterEmployee = ({ setEmployees, allEmployees }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value) {
      setEmployees(
        // eslint-disable-next-line react/prop-types
        allEmployees.filter((emp) =>
          emp.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setEmployees(allEmployees);
    }
  };

  return (
    <input
      type="text"
      placeholder="Filter employees by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};

export default FilterEmployee;
