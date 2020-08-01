import {
    CREATE_HERO
} from '../actions/heroes'

const initialState = {
    list: [{
        name: 'Iron man',
        avatar: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/1000?cb=20190423175213',
        biography: 'Genius, Billionaire, Playboy, Phillanthropus'
    }]
}

const heroes = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_HERO:
            return {
                ...state,
                list: [
                    ...state.list,
                    payload
                ]
            }
        default:
            return state
    }
}

export default heroes