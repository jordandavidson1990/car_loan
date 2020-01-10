import React from 'react'

function PriceForm({ passPrice }) {

    const handleKeyUp = (event) => {
        event.preventDefault()
        passPrice(event.target.value);
    }

    return (
        <form onKeyUp={handleKeyUp}>
            <label htmlFor="vehiclePrice">Vehicle Price: </label>
            <input required type="number" id="vehiclePrice" min={1} />
        </form>
    )
}

export default PriceForm