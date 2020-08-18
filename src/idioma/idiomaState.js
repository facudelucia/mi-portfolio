import React, { useReducer } from 'react';
import idiomaReducer from "./idiomaReducer"
import idiomaContext from "./idiomaContext"
import {types} from "../types/types"

const IdiomaState = props => {
    const initialState={
        english: true
    }

    const [state, dispatch] = useReducer(idiomaReducer, initialState)

    const changeIdiomaEnglish = () => {
        dispatch({
            type: types.idiomaEnglish
        })
    }
    const changeIdiomaEspanol = () => {
        dispatch({
            type: types.idiomaEspanol
        })
    }

    return (
        <idiomaContext.Provider
            value={{
                english: state.english,
                changeIdiomaEnglish,
                changeIdiomaEspanol
            }}
        >
            {props.children}
        </idiomaContext.Provider>
    )
}

export default IdiomaState