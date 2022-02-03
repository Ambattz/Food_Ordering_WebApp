import React, { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [cartIsShown, SetcartIsShown] = useState(false);

  const showCartHandler = () => {
    SetcartIsShown(true);
  };
  const hideCartHandler = () => {
    SetcartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
