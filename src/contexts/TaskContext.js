import React, { createContext, useReducer } from "react";

const initialState = [
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
];

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, action.task];
        case 'REORDER_TASKS':
            return [...action.newTasks];
        default:
            throw new Error("Task reducer action type not recognized")
    }
};

export const TaskContext = createContext(initialState);
const { Provider } = TaskContext;

const TaskContextProvider = ({ children }) => {

    const [tasks, dispatch] = useReducer(taskReducer, initialState);

    return (
        <Provider value={{tasks, dispatch}}>
           { children }
        </Provider>
    );
};

export default TaskContextProvider;