import { BsFillCartPlusFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsFillCartPlusFill size={30} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
