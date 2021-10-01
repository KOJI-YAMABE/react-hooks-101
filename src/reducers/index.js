
// action = {
//   type: 'CREATE_EVENT',
//   title: '東京オリンピックのお知らせ',
//   body: '２０２１年に東京オリンピックを開催します！'
// }

// # before
// state = []

// # after
// state = [
// {
//   id: 1,
//   title: '東京オリンピックのお知らせ',
//   body: '２０２１年に東京オリンピックを開催します！'
// }
// ]

// # defore
// state = [
//   {id: 1, title: 'たいとる１', body: 'ぼでぃ１'},
//   {id: 2, title: 'たいとる２', body: 'ぼでぃ２'},
//   {id: 3, title: 'たいとる３', body: 'ぼでぃ３'},
// ]

// # after
// state = [
//   {id: 1, title: 'たいとる１', body: 'ぼでぃ１'},
//   {id: 2, title: 'たいとる２', body: 'ぼでぃ２'},
//   {id: 3, title: 'たいとる３', body: 'ぼでぃ３'},
// {
//   id: 4,
//   title: '東京オリンピックのお知らせ',
//   body: '２０２１年に東京オリンピックを開催します！'
// }
// ]
const events = (state = [], action) => {
  switch(action.type) {
    case'CREATE_EVENT':
      const event =  { title: action.title, body: action.body }
      const length = state.length
      // idが0(初投稿)だったら1にしてそれ以外だったら最新のidに+1をする
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...event }]
    case'DELETE_EVENT':
    return state.filter(event => event.id !== action.id)
    case'DELETE_ALL_EVENTS':
    return []
    // case 'EDIT_EVENT':
    //   return state
    default:
      return state
  }
}

export default events