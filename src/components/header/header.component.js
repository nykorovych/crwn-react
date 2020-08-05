import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/">HOME</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign Out </OptionDiv>
        ) : (
          <OptionLink to="/signin">SignIn</OptionLink>
        )}
        <CartIcon></CartIcon>
      </OptionsContainer>
      {hidden ? null : <CartDropdown></CartDropdown>}
    </HeaderContainer>
  );
};
// const mstp = (state) => ({
//   currentUser: state.user.currentUser,
// hidden: state.cart.hidden
// });
const mstp = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mstp)(Header);
