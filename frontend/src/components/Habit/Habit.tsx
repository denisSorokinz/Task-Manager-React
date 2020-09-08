import React, { useEffect, useState } from "react";
import HabitEntity from "../../entity/HabitEntity";
import HabitContainer from "./HabitContainer";
import HabitCircle from "./HabitCircle";

const Habit: React.FC<HabitEntity> = ({ ...habit }) => {
    let [habitFirstLetter, setHabitFirstLetter] = useState<string>("");

    const getFirstLetter = (str: any = ""): string => {
        return (
            (typeof str === "string" &&
                str
                    .trim()
                    .substring(0, 1)
                    .toUpperCase()) ||
            ""
        );
    };

    useEffect(() => {
        let firstLetter = getFirstLetter(habit?.name);
        setHabitFirstLetter(firstLetter);
    }, [habit]);
    return (
        <HabitContainer>
            {/* TODO: add habit progress*/}
            <HabitCircle {...habit}>{habitFirstLetter}</HabitCircle>
            {habit.name}
        </HabitContainer>
    );
};

export default Habit;
