
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useContext } from "react";
import { CardContext } from "../../Context/CardContext";
import Cart from "../Cart";
import Loader from "../../Components/Loader/Loader";
export default function Home() {
  const cardContext = useContext(CardContext);
  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <main className="main-index">   
        {cardContext.shop.length === 0 ? (
          <>
          <Loader />
          <Loader />
          <Loader />
          </>
        ) : (
          <>
            {cardContext.shop.length ? (
              <>
                {cardContext.shop.map((item) => (
                  <Cart {...item} />
                ))}
              </>
            ) : (
              <div className="emptyBasket">
                <img src="/empty.webp" alt="" />
                <p>Your Basket Is Empty :((</p>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
