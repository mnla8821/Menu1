import "./Home.css";
import useGet from "../../CustomHooks/useGet";
import Products from "../../Services/Products";
import { Card, Loading } from "../../Components/index";
import { useEffect, useMemo, useState } from "react";
const Home = () => {
  const [loading, data] = useGet(Products.getAllProducts());
  const [val, setVal] = useState("");
  const [wholeProducts, setWholeProducts] = useState([]);
  const [check, setCheck] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!val) return data; // إذا كانت القيمة فارغة، ارجع جميع المنتجات
    return data.filter((product) =>
      product.category.toLowerCase().includes(val.toLowerCase())
    );
  }, [data, check]); // يعتمد على data و val

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheck(!check);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Search by category"
        />
        <button>Search</button>
      </form>
      <div className="meals">
        {loading == true ? (
          <Loading />
        ) : (
          filteredProducts.map((item) => (
            <div className="col-lg-3 col-md-5 col-sm-12 meal" key={item.id}>
              <Card
                price={item.price}
                category={item.category}
                img={item.image}
                id={item.id}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
