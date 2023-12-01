import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <ul className={styles.categories}>
        <h2>КАТЕГОРИИ:</h2>
        <li>Платья</li>
        <li>Верх</li>
        <li>Низ</li>
        <li>Мелочи</li>
        <li>Костюмы</li>
      </ul>
      <ul className={styles.price}>
        <h2>ЦЕНЫ:</h2>
        <li>Все цены</li>
        <li>до 500</li>
        <li>500 — 1000</li>
        <li>1000 — 1500</li>
        <li>от 1500</li>
      </ul>
      <ul className={styles.size}>
        <h2>РАЗМЕР:</h2>
        <li>XS — S</li>
        <li>S — M</li>
        <li>M — L</li>
        <li>L — XL</li>
      </ul>
    </div>
  );
};

export default Filter;
