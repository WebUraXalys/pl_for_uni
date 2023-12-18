import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'Дуже погано',
  },
  {
    value: 50,
    label: 'Є недоопрацювання',
  },
  {
    value: 100,
    label: 'Все чудово',
  },
];

function valuetext(value) {
  return value;
}
// console.log(valuetext());

export const MarkComp = ({ onValueChange }) => {
  const [value, setValue] = React.useState(20);

  // Функція для оновлення стану при зміні значення слайдера
  const handleChange = (event, newValue) => {
    setValue(newValue);
    onValueChange(newValue); // виклик функції callback з новим значенням
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}