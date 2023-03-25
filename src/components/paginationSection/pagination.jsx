import Button from "../../elements/productSection/button/button";
import styles from "./Pagination.module.css";
export default function Pagination({ page, setPage, limitPages }) {
  function checkPageMinimum(currentPage) {
    if (currentPage <= 1) {
      return true;
    } else {
      return false;
    }
  }
  function checkPageMaximum(currentPage, limit) {
    if (currentPage >= limit) {
      return true;
    } else {
      return false;
    }
  }
  function increasePage() {
    setPage(page + 1);
  }
  function decreasePage() {
    setPage(page - 1);
  }
  const { pagination, paginationInput } = styles;
  return (
    <div className={pagination}>
      <Button
        disabled={checkPageMinimum(page)}
        onClick={() => {
          decreasePage();
        }}
        size="small"
        status="default">
        prev
      </Button>
      <input
        className={paginationInput}
        type="text"
        readOnly
        defaultValue={page}
      />
      <Button
        disabled={checkPageMaximum(page, limitPages)}
        onClick={() => {
          increasePage();
        }}
        size="small"
        status="default">
        next
      </Button>
    </div>
  );
}
