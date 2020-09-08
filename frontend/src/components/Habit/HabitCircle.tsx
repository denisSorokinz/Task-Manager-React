import React from "react";
import HabitEntity from "../../entity/HabitEntity";
import HabitCircleBorder from "./HabitCircleBorder";
import HabitCircleButton from "./HabitCircleButton";

const HabitCircle: React.FC<HabitEntity> = ({ children, ...habit }) => {
    const trimQuotes = (str: string) => str.replace(/['"]+/g, "");
    let { repeats_done, repeats_count } = habit;
    let progress = { repeats_done, repeats_count };
    let habitColor = trimQuotes(habit.color);

    return (
        <React.Fragment>
            <HabitCircleBorder color={habitColor} {...progress} />
            <HabitCircleButton color={habitColor}>{children}</HabitCircleButton>
        </React.Fragment>
    );
};

export default HabitCircle;
