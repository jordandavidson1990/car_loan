import React from 'react'
import PropTypes from 'prop-types'

function PriceForm({ passPrice }) {

    // price form in own form in order to automatically calculate 15% for deposit amount
    const handleKeyUp = (event) => {
        event.preventDefault()
        passPrice(event.target.value);
    }

    return (
        <form onKeyUp={handleKeyUp}>
            <h3>Find out Monthly Repayment Costs</h3>
            <label htmlFor="vehiclePrice">Vehicle Price: </label>
            <input required type="number" id="vehiclePrice" min={1} />
        </form>
    )
}

PriceForm.propTypes = {
    passPrice: PropTypes.func
}

export default PriceForm