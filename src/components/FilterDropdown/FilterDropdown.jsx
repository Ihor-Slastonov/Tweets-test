import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#8D81DD',
    boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);',
    borderRadius: '8px',
    cursor: 'pointer',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#2c217d' : 'white',
    color: state.isFocused ? '#ebd8ff' : 'black',
    cursor: 'pointer',
  }),
};

function FilterDropdown({ filter, handleFilterChange }) {
  const options = [
    { value: 'all', label: 'Show All' },
    { value: 'follow', label: 'Follow' },
    { value: 'following', label: 'Following' },
  ];

  return (
    <Select
      value={options.find(option => option.value === filter)}
      onChange={handleFilterChange}
      options={options}
      styles={customStyles}
    />
  );
}

export default FilterDropdown;
