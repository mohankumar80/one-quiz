import React, { ReactNode } from "react";
import { useReducer, createContext, useContext } from "react";
import { InitialStateType, ActionType } from "./data-context.types";


const initialState: InitialStateType = {
    finalScore: 0,
    quizData: null,
    questionNo: 0,
    currentQuestion: null
}

const dataReducer = (state: InitialStateType, action: ActionType) => {
    switch(action.type) {

        case "ADD_QUIZZES":
            return { ...state, quizData: action.payload }

        case "ADD_CURRENT_QUESTION":
            return { ...state, currentQuestion: action.payload }
        
        case "INCREMENT":
            return { ...state, questionNo: state.questionNo + 1 }

        case "CHANGE_SCORE":
            if(action.payload.isRight) {
                return { ...state, finalScore: state.finalScore + action.payload.points }
            } return state

        case "RESET":
            return { ...state, questionNo: 0, finalScore: 0 }
            
        default:
            return state;
    }
}

export const DataContext = createContext<{
    state: InitialStateType,
    dispatch: React.Dispatch<ActionType>
}>({ state: initialState, dispatch: () => undefined });


export function DataProvider({ children }: { children: ReactNode }) {

    const [state, dispatch] = useReducer(dataReducer, initialState)

    return <DataContext.Provider value={{ state, dispatch }}>
        {children}
    </DataContext.Provider>
}

export function useData() {
    return useContext(DataContext);
}