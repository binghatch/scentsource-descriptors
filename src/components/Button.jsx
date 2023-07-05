import PropTypes from "prop-types";
import { ArrowRight, Leaf } from 'lucide-react';

const Button = ({ children, variant, icon }) => {
  let buttonClasses = "flex flex-row justify-between items-center gap-1 rounded py-2 text-sm font-medium bg-gray-900 text-white";

  if (icon) {
    buttonClasses += " ps-4 pe-3.5";
  } else {
    buttonClasses += " px-4";
  }

  switch (variant) {
    case "primary":
      buttonClasses += " bg-teal-800 text-white";
      break;
    case "secondary":
      buttonClasses += " bg-gray-900 text-white";
      break;
    case "cancel":
      buttonClasses += " bg-red-50 text-red-600";
      break;
    default:
      break;
  }

  let IconComponent = null;

  switch (icon) {
    case 'start':
      IconComponent = ArrowRight;
      break;
    case 'next':
      IconComponent = Leaf;
      break;
    default:
      break;
  }

  return (
    <button className={buttonClasses}>
      {children}
      {IconComponent && <IconComponent color="white" size={14}/>}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  icon: PropTypes.string
}

export default Button