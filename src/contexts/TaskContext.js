import React, { createContext, useReducer } from "react";

const initialState = {
    tasks: [
        {
            id: 'bf2654f0-2934-4f5e-bcc6-dedebbf931dd',
            title: "This is my first task!",
            priority: 1,
            dueDate: "1/17",
            estTime: 30
        },
        {
            id: '2e3a8e2a-3ca1-489b-bd0f-4c4f43ee4f2a',
            title: "This is my second task",
            priority: 3,
            dueDate: "1/18",
            estTime: 45
        }
    ],
    schedule: [
        {time: "Morning", dropId: 's-0', schedTasks: []},
        {time: "Afternoon", dropId: 's-1', schedTasks: []},
        {time: "Evening", dropId: 's-2', schedTasks: []}
    ],
    activeTask: {}
};

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.task]};

        case 'REORDER_TASKS':
            return {...state, tasks: action.newTasks};

        case 'ADD_TO_SCHED':
            let sched = state.schedule;
            sched[action.schedId] = {...sched[action.schedId], schedTasks: [...sched[action.schedId].schedTasks, action.task]}

            const tasks = state.tasks.filter((task) => task.id !== action.task.id);

            return {...state, schedule: sched, tasks};
        case 'SCHED_TO_TASK':
            return {...state, tasks: action.newTasks, schedule: action.newSched};

        case 'SET_TIMED_TASK':
            return {...state, activeTask: action.task};

        case 'REMOVE_ACTIVE_TASK':
            return {...state, activeTask: {}};

        case 'COMPLETE_TASK':
            return {...state, activeTask: {}};

        case 'REMOVE_FROM_TASK_LIST':
            return {...state, tasks: state.tasks.filter((task) => task.id !== action.id)};

        case 'REMOVE_FROM_SCHED':
            let newSched = state.schedule;
            newSched[action.schedId].schedTasks = action.newTasks;

            return {...state, schedule: newSched};
        default:
            throw new Error("Task reducer action type not recognized");
    }
};

export const TaskContext = createContext(initialState);
const { Provider } = TaskContext;

const TaskContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <Provider value={{state, dispatch}}>
           { children }
        </Provider>
    );
};

export default TaskContextProvider;