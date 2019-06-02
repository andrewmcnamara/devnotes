import React from 'react'
import Items from './Items'
import PropTypes from 'prop-types'
export { default as useItems } from './useItems'

const ItemPanel = ({ items, deleteItem }) => (
  <section className="section">
    <div className="container">
      <h2 className="title is-2">Your things here</h2>
      {items.length === 0 ? (
        <h3 className="title is-3">You have no things.</h3>
      ) : (
        <Items {...{ items, deleteItem }} />
      )}
    </div>
  </section>
)

ItemPanel.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default ItemPanel
