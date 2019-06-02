import React from 'react'
import PropTypes from 'prop-types'

const Items = ({ items = [], deleteItem }) => (
  <div className="list">
    {items.map((item, idx) => (
      <div className="list-item" key={idx}>
        {' '}
        {item}
      </div>
    ))}
  </div>
)

Items.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default Items
