import React, { useContext } from "react";
import Swal from 'sweetalert2'
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { Product } from "../Components/Products.type";
import { CardContext } from "../Context/CardContext";
import { useNavigate } from "react-router";
export default function Cart({id,title,image,price,rating}:Product) {

  const cardContext = useContext(CardContext);
  const navigate = useNavigate()

  const addBtnCard = (id:number) => {
    Swal.fire({
      title: "Do you want to add this product to your basket?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      cardContext.addProduct(id)
      if (result.isConfirmed) {
        navigate("/")
      }
    });
  }

  return (
    <>
      <main className="card-index">
        <div className="card">
          <img src={image} alt="pic" />
          <main className="mainSection">
            <div className="card-top">
              <p>{title}</p>
              <div className="card-details">
                <div>
                  {Array(Math.ceil(rating.rate))
                    .fill(0)
                    .map((item) => (
                      <AiFillStar style={{ color: "orange" }} />
                    ))}
                  {Array(5 - Math.ceil(rating.rate))
                    .fill(0)
                    .map((item) => (
                      <AiOutlineStar style={{ color: "orange" }} />
                    ))}
                </div>
                <p>{price}$</p>
              </div>
            </div>

            <div className="card-bottom">
              <div className="product-count">
                <p>Count: {rating.count}</p>
              </div>
              <button onClick={() => addBtnCard(id)}>Add From Basket</button>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
