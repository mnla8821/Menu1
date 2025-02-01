import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, img, price, category }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/${id}`, {
      state: {
        ID: id,
      },
    });
  };
  return (
    <>
      <img src={img} alt="" />
      <h2>{category}</h2>
      <h5>{price}$</h5>
      <button onClick={() => handleNavigate(id)}>Details</button>
    </>
  );
};

export default Card;
