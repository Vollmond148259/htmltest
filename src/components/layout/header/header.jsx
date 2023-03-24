import styles from "./Header.module.css";
export default function Header() {
  const { head, headLink, headContainer, headLogo, headNav } = styles;
  return (
    <div className={head}>
      <div className={headContainer}>
        <h2 className={headLogo}>
          <a className={headLink} href="#">
            Logo
          </a>
        </h2>
        <div className={headNav}>
          <h3>
            <a className={headLink} href="#">
              Products
            </a>
          </h3>
          <h3>
            <a className={headLink} href="#">
              Contacts
            </a>
          </h3>
          <h3>
            <a className={headLink} href="#">
              About Us{" "}
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
