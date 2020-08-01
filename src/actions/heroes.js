export const CREATE_HERO = 'CREATE_HERO'

export const createHero = (hero) => (dispatch) => {
    dispatch({
        type: CREATE_HERO,
        payload: hero,
    })
}