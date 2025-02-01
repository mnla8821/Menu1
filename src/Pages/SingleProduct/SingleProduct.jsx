import { useLocation, useNavigate } from "react-router-dom";
import "./SingleProduct.css";
import useGet from "../../CustomHooks/useGet";
import Products from "../../Services/Products";
import { Loading } from "../../Components";
const SingleProduct = () => {
  const location = useLocation();
  const [loading, singleData] = useGet(
    Products.getSingleProduct(location.state.ID)
  );
  console.log("🚀 ~ SingleProduct ~ singleData:", singleData);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/", {});
  };
  return (
    <div className="single">
      {loading == true ? (
        <Loading />
      ) : (
        <>
          <div className="back" onClick={handleNavigate}>
            Back Home
          </div>
          <h1>{singleData && singleData.category}</h1>
          <div className="info ">
            <div className="img col-lg-4 col-md-8 col-sm-10">
              <img src={singleData && singleData.image} alt="" />
            </div>
            <div className="desc col-lg-5 col-md-8 col-sm-10 ">
              <div>
                <p>Id:</p> {singleData && singleData.id}
              </div>
              <div>
                <p>Title:</p> {singleData && singleData.title}
              </div>
              <div>
                <p>Price :</p> {singleData && singleData.price}
              </div>
              <div className="bla">
                <p>Count :</p> {singleData && singleData.rating.count}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
