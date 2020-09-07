import styled, {css} from "styled-components";

interface TaskProps {
    completed: Boolean
}

export default styled.li`
    height: 5rem;
    border-bottom: 0.03rem solid $gray--dark;
    display: flex;
    align-items: center;
    &:last-of-type {
        border-bottom: none;
    }


    /* ${({completed}:TaskProps) => completed && css`
        
    `} */
`;
