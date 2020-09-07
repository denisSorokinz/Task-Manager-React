import React from "react";
import { fetchHabits } from "../../services/DatabaseService";
import HabitEntity from "../../entity/HabitEntity";
import HabitsContainer from "./HabitListContainer";
import Habit from "../Habit/Habit";
import SecondaryText from "../SecondaryText/SecondaryText";

class HabitList extends React.Component {
    state = {
        habits: [],
        isLoading: true,
    } as { habits: HabitEntity[]; isLoading: boolean };

    constructor(props: any) {
        super(props);
        //bind setters
    }

    completeFetching = (h: HabitEntity[]) => {
        this.setState({ habits: h, isLoading: false });
    };

    componentDidMount() {
        fetchHabits()
            .then((h: HabitEntity[]) => this.completeFetching(h))
            .catch((err) => {
                console.error(err);
                this.setState({ isLoading: false });
            });
    }

    render() {
        return this.state.isLoading ? (
            <SecondaryText>Fetching habits...</SecondaryText>
        ) : this.state.habits.length ? (
            <HabitsContainer>
                {this.state.habits.map((habit: HabitEntity) => (
                    <Habit {...habit} key={habit.id} />
                ))}
            </HabitsContainer>
        ) : (
            <SecondaryText>No habits found</SecondaryText>
        );
    }
}

// const HabitList: React.FC = () => {
//     let [habits, setHabits] = useState<HabitEntity[]>();
//     let [isLoading, setLoading] = useState<Boolean>(true);

//     const completeFetching = (h: HabitEntity[]) => {
//         setHabits(h);
//         setLoading(false);
//     };

//     useEffect(() => {
//         fetchHabits()
//             .then((h: HabitEntity[]) => completeFetching(h))
//             .catch((err) => {
//                 console.error(err);
//                 setLoading(false);
//             });
//     }, []);

//     return isLoading ? (
//         <SecondaryText>Fetching habits...</SecondaryText>
//     ) : habits ? (
//         <HabitsContainer>
//             {habits.map((habit: HabitEntity) => (
//                 <Habit {...habit} key={habit.id} />
//             ))}
//         </HabitsContainer>
//     ) : (
//         <SecondaryText>No habits found</SecondaryText>
//     );
// };

export default HabitList;
