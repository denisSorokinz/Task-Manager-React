import styled from "styled-components";
import backgroundPath from "../../assets/images/menu.svg";

export default styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    background-image: url(${backgroundPath});
    background-repeat: no-repeat;
    background-size: contain;
    width: 1.5rem;
    height: 1.5rem;
`;
