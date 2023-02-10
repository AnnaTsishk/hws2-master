const initState = {
    themeId: 1,
}
type ActionType = {
    type: 'SET_THEME_ID'
    id: number
}
type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
