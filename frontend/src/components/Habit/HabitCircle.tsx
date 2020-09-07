import React from "react";
import HabitEntity from "../../entity/HabitEntity";
import HabitCircleBorder from "./HabitCircleBorder";
import HabitCircleButton from "./HabitCircleButton";

const HabitCircle: React.FC<HabitEntity> = ({ children, ...habit }) => {
    let { repeats_done, repeats_count } = habit;
    let progress = { repeats_done, repeats_count };
    return (
        <React.Fragment>
            <HabitCircleBorder color={habit.color} {...progress} />
            <HabitCircleButton color={habit.color}>
                {children}
            </HabitCircleButton>
        </React.Fragment>
    );
};

export default HabitCircle;
