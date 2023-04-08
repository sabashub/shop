import styled from "styled-components";
import { ReactComponent as ShoppingSVG } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSVG)`
  width: 33px;
  height: 33px;
`;
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 8px;
`;
