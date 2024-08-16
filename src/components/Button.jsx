// import { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({value,onSquareClick}) => {
  // const [value, setValue] = useState(null);
  // const handleClick = () => {
  //   setValue("X")
  // }
  return (
    <div>
      <div onClick={onSquareClick} className="gap-0 h-20 square border-[1px] cursor-pointer border-black w-20 items-center flex justify-center m-auto text-2xl font-bold ">{value}</div>
    </div>
  )
}
Button.propTypes = {
  value: PropTypes.number.isRequired,
  onSquareClick: PropTypes.number.isRequired,
};
export default Button
