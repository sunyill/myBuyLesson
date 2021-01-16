import React from "react";
import styles from "./ShoppingCar.module.css";
import { FiShoppingCart } from "react-icons/fi";

interface Props {}

interface State {
  isOpen: boolean;
  count: number;
}

class ShoppingCar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
      count: 1
    };
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    if ((e.target as HTMLElement).nodeName === "SAPN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
    // this.setState({
    //   count: this.state.count + 1
    // });
  };
  // handleClick(e) {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }
  render() {
    return (
      <div className={styles.cartContainer}>
        <div>
          <button className={styles.button} onClick={this.handleClick}>
            <FiShoppingCart />
            <span>购物车 2件</span>
          </button>
        </div>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>Robot 1</li>
            <li>Robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCar;
