import React from 'react'
import './LoanSchemeTable.css'

function LoanSchemeTable({ vehicle }) {
    return (

        < table >
            <thead></thead>
            <caption></caption>
            <tbody>
                <tr>
                    <td>Vehicle Price</td>
                    <td>Deposit Amount</td>
                    <td>Delivery Date</td>
                    <td>Finance Years</td>
                </tr>
                <tr>
                    <td>{vehicle.price}</td>
                    <td>{vehicle.depositAmount}</td>
                    <td>{vehicle.deliveryDate}</td>
                    <td>{vehicle.financeOption}</td>
                </tr>
            </tbody>
        </table >
    )
}

export default LoanSchemeTable