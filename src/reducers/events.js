import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  DELETE_EVENT
} from '../actions'

const events = (state = [], action) => {
  switch(action.type) {
    case CREATE_EVENT:
      const event =  { title: action.title, body: action.body }
      const length = state.length
      // idが0(初投稿)だったら1にしてそれ以外だったら最新のidに+1をする
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...event }]
    case DELETE_EVENT:
    return state.filter(event => event.id !== action.id)
    case DELETE_ALL_EVENTS:
    return []
    // case 'EDIT_EVENT':
    //   return state
    default:
      return state
  }
}

export default events