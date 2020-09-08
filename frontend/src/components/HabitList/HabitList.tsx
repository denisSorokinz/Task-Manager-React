import React, { Suspense } from "react";
import { fetchHabits } from "../../services/DatabaseService";
import HabitEntity from "../../entity/HabitEntity";
import HabitsContainer from "./HabitListContainer";
import Habit from "../Habit/Habit";
import SecondaryText from "../SecondaryText/SecondaryText";
/*
1. Database
2. Suspense
3. Fetch error (Error boundary component)
*/
const resource = fetchHabits();

class HabitList extends React.Component {
    state = {
        habits: [],
        isLoading: true
    } as { habits: HabitEntity[]; isLoading: boolean };

    constructor(props: any) {
        super(props);
        //bind setters
    }

    completeFetching = (h: HabitEntity[]) => {
        this.setState({ habits: h, isLoading: false });
    };

    render() {
        return (
            <Suspense
                fallback={<SecondaryText>Fetching habits...</SecondaryText>}
            >
                <HabitsContainer resource={resource} />
            </Suspense>
        );
    }
}

export default HabitList;
