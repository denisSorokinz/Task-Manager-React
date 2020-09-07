import invert from "invert-color";
import styled from "styled-components";
import colors from "../../colors/_colors";
import { rgbToHex, colorNameToHex } from "../../services/ColorConverterService";
import HabitCircleProps from "../../entity/HabitCircleProps";

const HabitCircleButton = styled.button.attrs(
    ({ color }: HabitCircleProps) => ({
        color: color ? (colors[color] ? colors[color] : color) : "darkgray",
    })
)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: ${({ color }: HabitCircleProps) => color};
    color: ${({ color }: HabitCircleProps) => {
        let hex = color.match(/rgb/) ? rgbToHex(color) : colorNameToHex(color);
        let inverted = invert(hex);
        return inverted;
    }};
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 3.5rem;
        height: 3.5rem;
        background-color: transparent;
        border: 0.25rem solid ${({ color }: HabitCircleProps) => color};
        border-radius: 50%;
    }
`;

export default HabitCircleButton;