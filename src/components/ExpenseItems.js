import React, { useState } from "react";
import "../components/ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  //function ExpenseItem({date, title, amount})  Object destructuring

  const [title, setTitle] = useState(props.title);
  //let title = props.title;

  // const clickHandler = () => {
  //   setTitle("Updated!!");
  //   console.log("Clicked!!!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
}

export default ExpenseItem;
