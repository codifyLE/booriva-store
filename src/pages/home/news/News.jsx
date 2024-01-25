import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../../components/card/Card";
import title from "./../../../assets/img/svg/Заголовок 1 новинки.svg";
import wave from './../../../assets/img/svg/wave.svg'
import Button from "../../../components/button/Button";

import styles from "./News.module.scss";

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000`)
    .then((res) => res.json())
    .then((data) => setNews(data[0].products.slice(0, 4)))
    .catch((rej) => console.log('error'));
}, [])
     console.log(news)
  return (
    <div className="container">
      <section>
        <div className={styles.news}>
          <h2>Новинки</h2>
          <span>Новинки <img src={wave} alt="" /></span>
        </div>
      </section>
      <div className={styles.cards}>
       
      {
        news.map(({ id, name, price, images }) => (
        <Link to={`/CardProduct?id=${id}`} style={{ textDecoration: "none" }} key={id}>
        <Card subtitle={name} price={price} image={images} />
       </Link>
        ))
      }
      </div>
     <Link to={'/catalog'}> <Button /></Link>
    </div>
  );
};

export default News;
