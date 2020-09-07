import styled from "styled-components";
import colors from "../../colors/_colors";

export default styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.blueDark};
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    padding: 0 1rem;

    button,
    div:last-of-type {
        width: 1.5rem;
    }
`;
