import React from "react";
import HeaderProps from "../../entity/HeaderProps";
import HeaderContainer from "./HeaderContainer";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderHeading from "./HeaderHeading";

const Header: React.FC<HeaderProps> = ({ heading }) => {
    return (
        <HeaderContainer>
            <HeaderMenuButton />
            <HeaderHeading>{heading}</HeaderHeading>
            <div></div>
        </HeaderContainer>
    );
};

export default Header;
