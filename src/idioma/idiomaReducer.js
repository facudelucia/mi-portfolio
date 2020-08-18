import {types} from "../types/types"


export default (state, action) => {
    switch (action.type) {
        case types.idiomaEnglish:
            return{
                english: true
            }
        case types.idiomaEspanol:
            return{
                english: false
            }
        default:
            return state;
    }
}