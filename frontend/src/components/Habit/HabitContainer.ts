import styled from "styled-components";
import colors from "../../colors/_colors";

export default styled.li`
    flex-shrink: 0;
    width: 30vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.5rem;
    color: ${colors.white};
    list-style-type: none;
    position: relative;
`;
