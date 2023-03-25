import styles from "./Button.module.css";
export default function Button({
  children,
  status,
  size,
  component,
  full,
  href,
  style,
  onClick,
  disabled,
}) {
  const { button, danger, success, small, medium, large, fullWidth } = styles;

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
      statusClass = button;
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
    <>
      {component === "a" ? (
        <form action={href}>
          <button
            disabled={disabled}
            onClick={onClick}
            style={style}
            className={`${button} ${statusClass} ${buttonSize} 
            ${full && fullWidth}`}>
            {children}
          </button>
        </form>
      ) : (
        <button
          disabled={disabled}
          onClick={onClick}
          style={style}
          className={`${button} ${statusClass} ${buttonSize} 
          ${full && fullWidth}`}>
          {children}
        </button>
      )}
    </>
  );
}
