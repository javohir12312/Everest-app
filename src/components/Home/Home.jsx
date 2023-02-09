import React from "react";
import { Link } from "react-router-dom";
import style from "../Home/Default.module.scss";

const Home = () => {
  return (
    <div style={{ width: "100%", height: "100%", background: "#E0F2F1" }}>
      <header className="container">
        <div className={style.box}>
          <Link style={{ width: 60 }} to="/">
            <img
              style={{ borderRadius: 40 }}
              src="../assets/images/amdin-logo.avif"
              alt=""
              width={60}
            />
          </Link>

          <ul className={style.list}>
            <li>
              <Link to={localStorage.getItem("token") ? "/default" : "/login"}>Testga Kirish</Link>
            </li>
          </ul>
        </div>

        <main>
          <section className={style.hero}>
            <img src="../assets/images/amdin-logo.avif" alt="" />

            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                saepe reiciendis necessitatibus. Quisquam, eligendi dolores.
                Recusandae, officia et aperiam enim distinctio obcaecati ipsa
                unde asperiores fugiat natus doloremque ab. Inventore dicta
                fugiat suscipit nobis possimus odio voluptatibus laboriosam
                harum? Adipisci libero, molestiae labore, quidem amet voluptate
                quas atque repudiandae quibusdam totam obcaecati accusantium.
                Consequatur vitae sunt, cumque voluptates veritatis quas ab
                laborum ducimus minus mollitia quasi dolore nisi nihil
                reiciendis veniam labore dolorum sed aperiam. Saepe eligendi
                culpa expedita animi repudiandae nam in qui. Laudantium
                assumenda ipsam, suscipit quam distinctio eum officia eveniet,
                quo ullam libero dolore non deserunt corporis expedita veniam
                voluptatibus quibusdam dignissimos praesentium quae molestias
                illum nam animi labore mollitia. Incidunt earum ipsum corporis
                minus placeat in, animi atque quae fugit, illo, aspernatur
                magnam. Eum repellat explicabo repudiandae possimus hic minima
                optio nihil molestiae illo. Dignissimos nemo eius illum, magnam
                consequatur inventore obcaecati cum voluptatem? Nostrum, dolore
                sunt sed iure a tempora laudantium incidunt neque necessitatibus
                ab, eius commodi quaerat minus asperiores adipisci eligendi
                accusantium nemo ullam numquam quidem consequuntur in animi
                magnam iusto? Dolorem deserunt quas debitis nulla veritatis,
                alias ullam recusandae esse architecto, nisi rem labore ut
                pariatur harum, animi ab autem qui illum sunt impedit
                necessitatibus! Maxime ipsam adipisci, non eum necessitatibus
                explicabo culpa doloremque aperiam aut similique in consequuntur
                vitae laborum labore beatae placeat ipsa quia error. Eaque,
                earum. Aliquid commodi autem a earum natus quod quis ducimus
                impedit nisi ipsum velit possimus corporis voluptates dolore cum
                enim, laudantium odio, quaerat, dolores magnam magni consectetur
                quam sapiente! Commodi deleniti, non illo eius aut maxime ad
                odio enim culpa aliquam. Accusamus incidunt tempora culpa
                commodi adipisci repellendus aliquam itaque molestiae pariatur.
                Amet cum dignissimos fugit cupiditate exercitationem suscipit
                eum velit iure repudiandae, harum ut, veniam iusto. Inventore
                sunt temporibus iure in omnis quos eum!
              </p>
            </div>
          </section>
        </main>

        <footer>
          BockTest
        </footer>
      </header>
    </div>
  );
};

export default Home;
