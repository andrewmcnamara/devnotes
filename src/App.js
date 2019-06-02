import React, { Fragment } from 'react'
import ItemInput from './ItemInput'
import ItemPanel, { useItems } from './item-panel'

const App = () => {
  const [items, deleteItem, addItem] = useItems()
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <h1 className="title">Add your things here</h1>
          <ItemInput {...{ addItem }} />
        </div>
      </section>
      <ItemPanel {...{ items, deleteItem }} />
    </Fragment>
  )
}

export default App
