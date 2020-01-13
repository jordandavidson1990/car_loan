import React, { useState, useEffect } from 'react';

function Form({ vehiclePrice, calculateLoanScheme }) {

    const [minimumDeposit, setMinimumDeposit] = useState(0)

    useEffect(() => {
        const getMinDeposit = () => {
            // min deposit is 15% of price
            setMinimumDeposit(vehiclePrice * 0.15)
        }
        getMinDeposit()
    })

    const handleForm = (event) => {
        event.preventDefault();
        makeVehicle(event.target);
    }

    const makeVehicle = (target) => {
        const newVehicle = ({
            price: vehiclePrice,
            depositAmount: target.depositAmount.value,
            deliveryDate: target.deliveryDate.value,
            financeOption: target.financeOption.value,
            minMonthly: target.minMonthly.value,
            maxMonthly: target.maxMonthly.value,
            startFee: target.startFee.value,
            endFee: target.endFee.value
        })
        calculateLoanScheme(newVehicle);
    }

    return (
        <form onSubmit={handleForm}>
            <label htmlFor="depositAmount">Deposit Amount (Min 15% of Vehicle Price): </label>
            <input type="number" id="depositAmount" min={minimumDeposit} max={vehiclePrice} placeholder={vehiclePrice * 0.15} />
            <label htmlFor="deliveryDate">Delivery Date: </label>
            <input required type="date" name="deliveryDate" id="deliveryDate" />
            <label htmlFor="financeOption">Finance Years: </label>
            <select name="financeOption" id="financeOption">
                <option disabled>How many finance years...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <h3>Find Car based on Monthly Repayments</h3>
            <label htmlFor="maxMonthly">Max Monthly Repayment:</label>
            <input type="number" id="maxMonthly" min={0} placeholder={0} required />
            <label htmlFor="minMonthly">Min Monthly Repayment:</label>
            <input type="number" id="minMonthly" min={0} required placeholder={0} />
            <h4>Change Fees</h4>
            <label htmlFor="startFee">Starting Fee</label>
            <input type="number" placeholder={88}
                id="startFee" required />
            <label htmlFor="EndFee">End Fee</label>
            <input type="number" placeholder={20} required
                id="endFee" />


            <input type="submit" />
        </form>
    )
}

export default Form