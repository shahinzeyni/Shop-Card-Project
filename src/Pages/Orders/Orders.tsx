import React, { useContext } from "react";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { CardContext } from "../../Context/CardContext";
import Loader from "../../Components/Loader/Loader";
export default function Orders() {
  const cardContext = useContext(CardContext);
  return (
    <main className="main-index">
      {cardContext.UserCard.length === 0 ? (
          <div className="emptyBasket">
            <img src="/empty.webp" alt="" />
            <p>Your Basket Is Empty :((</p>
          </div>
      ) : (
        <>
          {cardContext.UserCard.length && (
            <>
              {cardContext.UserCard.map((item) => (
                <main className="card-index" >
                  <div className="card">
                    <img src={item.image} alt="pic" />
                    <main className="mainSection">
                      <div className="card-top">
                        <p>{item.title}</p>
                        <div className="card-details">
                          <div>
                            {Array(Math.ceil(item.rating.rate))
                              .fill(0)
                              .map((item) => (
                                <AiFillStar style={{ color: "orange" }} />
                              ))}
                            {Array(5 - Math.ceil(item.rating.rate))
                              .fill(0)
                              .map((item) => (
                                <AiOutlineStar style={{ color: "orange" }} />
                              ))}
                          </div>
                          <p>{item.price}$</p>
                        </div>
                      </div>

                      <div className="card-bottom">
                        <div className="product-count">
                          <p>Count: {item.count}</p>
                        </div>
                        <button onClick={() => cardContext.removeProduct(item.id)}>Remove From Basket</button>
                      </div>
                    </main>
                  </div>
                </main>
              ))}
            </>
          )}
        </>
      )}
    </main>
  );
}
