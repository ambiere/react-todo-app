import { useReducer } from "react";
import { createTodosCtx } from "./TodoContext";


type TodosType = {
    id: string;
    text: string;
}


type TodosInitialState = {
    todos: TodosType[];
}


export enum Types {
    GET = 'GET_TODO',
    ADD = 'ADD_TODO',
    EDIT = 'EDIT',
    DELETE = 'DELETE_TODO'
}


type TodosPayload =
    | {
        type: Types.ADD,
        id: string;
        text: string;
        payload: { id: string; text: string }
    }
    |
    {
        type: Types.DELETE,
        id: string;
        text: string;
        payload: { id: string; text: string }

    }
    |
    {
        type: Types.EDIT,
        id: string;
        text: string;
        payload: { id: string; text: string }

    }
    |
    {
        type: Types.GET,
        payload: TodosType[]

    }
    

export const todosReducer = (state: TodosInitialState, action: TodosPayload) => {
    switch (action.type) {
        case Types.GET:
            return {
                ...state, 
                todos: action.payload
            }
        case Types.ADD:
            // const newTodo = { id: action.payload.id, text: action.payload.text }
            const addedTodos = [...state.todos, action.payload]
            return {
                ...state, todos: addedTodos
            }
        case Types.EDIT:
            const updatedTodo = { ...action.payload }
            const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
            const updatedToDos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]
            return {
                ...state,
                todos: updatedToDos
            }
        case Types.DELETE:
            const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
            return {
                ...state,
                todos: filteredTodoState
            }
        default:
            return {
                ...state
            }
    }
}


export const GetTodosReducer = () => {
    const [ , , todosInitialState] = createTodosCtx()
    return useReducer(todosReducer, todosInitialState)
}
