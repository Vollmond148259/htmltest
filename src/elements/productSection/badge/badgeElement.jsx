import styles from "./BadgeElement.module.css";
export default function Badge({ x, y, text }) {
  const { badge } = styles;
  return (
    <div style={{ left: x, top: y }} className={badge}>
      {text}
    </div>
  );
}
