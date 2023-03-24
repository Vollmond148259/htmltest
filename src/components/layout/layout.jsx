import Header from "./header/header";
import Footer from "./footer/footer";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  const { contentContainer, mainContainer } = styles;
  return (
    <>
      <Header />
      <div className={mainContainer}>
        <div className={contentContainer}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
