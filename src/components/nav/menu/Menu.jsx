import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
 
  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((rej) => rej.json());
  }, []);
  const handleMouseOver = (id) => {
    fetch(`https://640ef1d54ed25579dc40e2a6.mockapi.io/categories/a${id}`)
      .then((res) => res.json())
      .then((data) => setSubMenu(data.categories));
  };

  return (
    <div className={styles.menu}>
      <div> 
        <ul>
          {menu.map(({ id, name }) => (
            <Link
              to={`/catalog?menuId=${id}`}
              style={{ textDecoration: "none" }}
              key={id}
            >
              <li onMouseOver={() => handleMouseOver(id)}
              >{name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.clothes}>
        {subMenu && subMenu.length > 0 && (
          <ul>
            {subMenu.map(({ id, name }) => (
              <Link
                to={`/catalog?categoriesId=${id}`}
                key={id}
                style={{ textDecoration: "none" }}
              >
                <li>{name}</li>
              </Link>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
};

export default Menu;
