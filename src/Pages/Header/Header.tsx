import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CardContext } from "../../Context/CardContext";
export default function Header() {
  const cardContext = useContext(CardContext)
  return (
    <header>
    <Link className="logo" to="/">
      Shahin Shop
    </Link>
    <Link to="/order">
      <AiOutlineShoppingCart className="shop-icon" />
      <span style={{fontFamily:"fantasy",display:"flex",justifyContent:"center",alignItems:"center"}}>{cardContext.UserCard.length}</span>
    </Link>
  </header>
  )
}
