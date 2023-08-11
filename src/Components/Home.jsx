import React from "react";
import "../Style/Home.scss";
import vg from "../Assest/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techystar</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni a
            hic vero quis voluptatem iure corrupti exercitationem unde nobis
            minima amet molestiae, mollitia doloribus molestias, architecto nemo
            eos ab quos.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            dolor dolores alias beatae obcaecati, nihil eligendi autem quia
            tempora vero fugiat sapiente expedita, voluptas omnis recusandae
            possimus earum. Deleniti animi ipsa consectetur accusantium corrupti
            id esse, atque, fugit magni mollitia eum quam maiores necessitatibus
            laborum quaerat doloribus, consequatur asperiores perferendis!
            Doloribus esse beatae dolor aliquam commodi, ad quo, similique
            eveniet quidem numquam vel unde! Eum esse voluptatum soluta facilis
            sed laborum nulla repudiandae, inventore delectus nisi autem, ad
            ipsum natus assumenda. Cupiditate porro molestias at asperiores
            pariatur, dolorum omnis ut tempore! Quam nemo ex nobis voluptates
            blanditiis officiis, hic dolorem!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
