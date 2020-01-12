import React from 'react'

function PriceForm({ passPrice }) {

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

export default PriceForm