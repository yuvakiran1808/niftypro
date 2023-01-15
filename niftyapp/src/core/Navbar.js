import React, { useState } from "react";

import { Menu, Dropdown } from "semantic-ui-react";

const StockOptions = [
  {
    name: "NSE",
    text: "NSE",
    key: "NSE",
    value: "NSE",
  },
  {
    name: "BSE",
    text: "BSE",
    key: "BSE",
    value: "BSE",
  }
];

const Navbar = () => {
  const [activeItem, setActive] = useState("Stock");

  const onClickHandler = (name) => {
    setActive(name);
    console.log(name);
  };
  return (
    <div className="container">
    <div className="col-md-4 py-4">
      <Menu pointing>
        <Dropdown
          placeholder="Stock"
          name="Stock"
          fluid
          selection
          options={StockOptions}
          active={activeItem === "Stock"}
          onClick={() => {
            onClickHandler("Stock");
          }}
        ></Dropdown>
        <Menu.Item
          active={activeItem === "Future"}
          name="Future"
          onClick={() => {
            onClickHandler("Future");
          }}
          className="px-5"
        >
          Future
        </Menu.Item>
        <Menu.Item
          active={activeItem === "Options"}
          name="Options"
          onClick={() => {
            onClickHandler("Options");
          }}
          className="px-5"
        >
          Options
        </Menu.Item>
      </Menu>
    </div>
    </div>
  );
};

export default Navbar;
