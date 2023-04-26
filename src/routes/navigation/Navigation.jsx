import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.styles.jsx";
import { signOutUser } from "../../utils/firebase/Firebase";
import CartIcon from "../../components/cart-icon/Cart-icon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../context/CartContext";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./Navigation.styles";
import { selectCurrentUser } from "../../store/user/userSelector";
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
