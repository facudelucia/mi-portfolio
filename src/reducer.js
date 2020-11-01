export const initialState = {
    projects: [],
    projectId: null,
    token: localStorage.getItem("token"),
    english: true
}


const reducer = (state, action) => {

    switch (action.type) {
        case "GET_PROJECTS":
            return {
                ...state,
                projects: action.projects
            }
        case "GET_ID":
            return {
                ...state,
                projectId: action.projectId,
            }
        case "GET_TOKEN":
            localStorage.setItem("token", action.token)
            return {
                ...state,
                token: action.token
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                ...state,
                projects: [],
                projectId: null,
                token: null
            }
        case "ENGLISH":
            return{
                ...state,
                english:true
            }
        case "ESPANOL":
            return{
                ...state,
                english:false
            }
        default:
            return state
    }
}
export default reducer