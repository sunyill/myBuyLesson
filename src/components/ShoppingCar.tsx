import React from "react";
import styles from "./ShoppingCar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { AppState } from "../AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  render() {
    return (
      <AppState.Consumer>
        {value => {
          return (
            <div className={styles.cartContainer}>
              <div>
                <button className={styles.button} onClick={this.handleClick}>
                  <FiShoppingCart />
                  <span>购物车 {value.shoppingCart.items.length}件</span>
                </button>
                <div
                  className={styles.cartDropDown}
                  style={{ display: this.state.isOpen ? "block" : "none" }}
                >
                  <ul>
                    {value.shoppingCart.items.map(i => (
                      <li>{i.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </AppState.Consumer>
    );
  }
}

export default ShoppingCar;
