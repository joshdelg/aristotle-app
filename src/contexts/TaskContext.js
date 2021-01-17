import React, { createContext, useReducer } from "react";

const initialState = [
    {
        id: 0,
        title: "This is my first task!",
        priority: 1,
        dueDate: "1/17",
        estTime: 30
    },
    {
        id: 1,
        title: "This is my second task",
        priority: 3,
        dueDate: "1/18",
        estTime: 45
    }
];

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, { id: 1000, title: "New task added!", priority: 1, dueDate: "1/23", estTime: 10}];
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