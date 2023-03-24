import styles from "./Button.module.css";
export default function Button({ children, status, size }) {
  const { button, danger, success, small, medium, large } = styles;

  let statusClass;
  let buttonSize;
  switch (status) {
    case "default": {
      statusClass = button;
      break;
    }
    case "success": {
      statusClass = success;
      break;
    }
    case "danger": {
      statusClass = danger;
      break;
    }
    default: {
      statusClass = "default";
    }
  }
  switch (size) {
    case "small": {
      buttonSize = small;
      break;
    }
    case "medium": {
      buttonSize = medium;
      break;
    }
    case "large": {
      buttonSize = large;
      break;
    }
    default: {
      buttonSize = medium;
    }
  }

  return (
    <button className={`${button} ${statusClass} ${buttonSize}`}>
      {children}
    </button>
  );
}
