import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ItemInput = ({ addItem }) => {
  const [item, setItem] = useState('')
  const saveItem = event => {
    addItem(item)
    setItem('')
  }

  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-primary is-medium"
          value={item}
          type="text"
          placeholder="Enter your thing"
          onChange={e => setItem(e.target.value)}
        />

        <button className="button is-primary" onClick={saveItem}>
          Add
        </button>
      </div>
    </div>
  )
}

ItemInput.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default ItemInput
