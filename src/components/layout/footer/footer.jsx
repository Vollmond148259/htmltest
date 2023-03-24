import styles from "./Footer.module.css";
export default function Footer() {
  const {
    footer,
    footerContainer,
    footerLink,
    footerCopyright,
    footerNav,
    footerDivider,
    footerLogo,
  } = styles;
  return (
    <>
      <div className={footer}>
        <div className={footerContainer}>
          <div className={footerNav}>
            <h4>
              <a href="#" className={footerLink}>
                Products
              </a>
            </h4>
            <h4>
              <a href="#" className={footerLink}>
                Discount
              </a>
            </h4>
            <h4>
              <a href="#" className={footerLink}>
                About us
              </a>
            </h4>
            <h4>
              <a href="#" className={footerLink}>
                For investors
              </a>
            </h4>
            <h4>
              <a href="#" className={footerLink}>
                Address
              </a>
            </h4>
          </div>
          <div className={footerDivider}></div>
          <h4 className={footerCopyright}>
            @<span className={footerLogo}>Logo</span> all rights reserved
            2003-2023
          </h4>
        </div>
      </div>
    </>
  );
}
