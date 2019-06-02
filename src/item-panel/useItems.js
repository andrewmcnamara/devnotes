import { useImmerReducer } from 'use-immer'

const initItems = (items = []) => ({ items })

const itemReducer = (draft, action) => {
  // const { items } = state
  switch (action.type) {
    case 'add':
      return void draft.items.push(action.payload)
    // return { items: items.concat() }
    case 'delete':
      return void draft.items.splice(
        draft.items.findIndex(item => item === action.payload),
        1,
      )

    case 'reset':
      return initItems(action.payload)
    default:
      throw new Error()
  }
}

const useItems = initialState => {
  const [state, dispatch] = useImmerReducer(itemReducer, { items: [] })
  const { items } = state

  const addItem = item => {
    dispatch({ type: 'add', payload: item })
  }

  const deleteItem = item => {
    dispatch({ type: 'delete', payload: item })
  }

  return [items, deleteItem, addItem]
}

export default useItems
