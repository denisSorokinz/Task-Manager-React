import React from "react";
import styled from "styled-components";
import Habit from "../Habit/Habit";
import SecondaryText from "../SecondaryText/SecondaryText";
import HabitEntity from "../../entity/HabitEntity";

const HabitsList = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    width: 90vw;
    margin: 1.75rem auto 0;
    padding: 0.5rem 0;
`;

interface HabitsListContainerProps {
    resource: { read: () => HabitEntity[] };
}

const HabitsListContainer: React.FC<HabitsListContainerProps> = ({
    resource
}) => {
    let habits: HabitEntity[] = resource.read();

    return (
        (habits.length && (
            <HabitsList>
                {habits.map(habit => (
                    <Habit key={habit.id} {...habit} />
                ))}
            </HabitsList>
        )) || <SecondaryText>No habits found</SecondaryText>
    );
};

export default HabitsListContainer;
