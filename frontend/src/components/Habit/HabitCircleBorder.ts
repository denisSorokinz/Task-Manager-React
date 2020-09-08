import invert from "invert-color";
import styled from "styled-components";
import colors from "../../colors/_colors";
import { rgbToHex, colorNameToHex } from "../../services/ColorConverterService";
import HabitCircleProps from "../../entity/HabitCircleProps";

const HabitCircleBorder = styled.div.attrs(({ color }: HabitCircleProps) => ({
    color: color ? (colors[color] ? colors[color] : color) : "darkgray"
}))`
    background: ${({
        color,
        repeats_done = 0,
        repeats_count = 0
    }: HabitCircleProps) => {
        let hex = color.match(/rgb/) ? rgbToHex(color) : colorNameToHex(color);
        let invertedColor = invert(hex);
        const coefficient =
            repeats_done !== 0 ? repeats_done / repeats_count : 0;
        const radius = 3.6 * 16;
        const leftHalfRotateCoefficient = 90;
        const rightHalfRotateCoefficient = -90;
        const circleLength = 2 * Math.PI * radius;
        const rightCirclePartLength =
            rightHalfRotateCoefficient + circleLength * coefficient;
        const leftCirclePartLength =
            leftHalfRotateCoefficient + circleLength * coefficient - 180;
        let circleLengthBiggerThanHalf = coefficient > 0.5;
        let rightHalfOfCircle = `linear-gradient(${
            circleLengthBiggerThanHalf ? "90" : rightCirclePartLength
        }deg, ${colors.black} 50%, ${invertedColor} 50%)`;
        let leftHalfOfCircle = `linear-gradient(${
            circleLengthBiggerThanHalf ? leftCirclePartLength : 90
        }deg, ${
            circleLengthBiggerThanHalf ? "transparent" : colors.black
        } 50%, ${
            circleLengthBiggerThanHalf ? invertedColor : "transparent"
        } 50%)`;
        return `${leftHalfOfCircle}, ${rightHalfOfCircle}`;
    }};
    /* background-color: ${({ color }: HabitCircleProps) => {
        let hex = color.match(/rgb/) ? rgbToHex(color) : colorNameToHex(color);
        let invertedColor = invert(hex);
        return invertedColor;
    }}; */
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    top: -0.25rem;
`;

export default HabitCircleBorder;
