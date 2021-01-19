import React, { useContext } from "react";
import { AppSetStateContext } from "../AppState";
import { RobotPropsData } from "./Robot";

export const withAddToCart = (
  ChildCompoment: React.ComponentType<RobotPropsData>
) => {
  // 第一种类形式
  // return class xx extends React.Component{}

  // 第二种 函数形式
  return props => {
    const setState = useContext(AppSetStateContext);
    const addToCart = (id, name) => {
      if (setState) {
        setState(state => {
          return {
            ...state,
            shoppingCart: { items: [...state.shoppingCart.items, { id, name }] }
          };
        });
      }
    };
    return <ChildCompoment {...props} addToCart={addToCart}></ChildCompoment>;
  };
};

//自定义钩子函数
export const useAddToCart = () => {
  const setState = useContext(AppSetStateContext);
  const addToCart = (id, name) => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: { items: [...state.shoppingCart.items, { id, name }] }
        };
      });
    }
  };
  return addToCart;
};
