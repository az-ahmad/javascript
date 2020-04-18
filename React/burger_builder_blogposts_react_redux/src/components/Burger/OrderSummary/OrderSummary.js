import React, { useEffect } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  useEffect(() => {

  },[props.show]);
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <strong>
        <span style={{ fontSize: "1.2rem" }}>Total price: £{props.price}</span>
      </strong>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchased}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
