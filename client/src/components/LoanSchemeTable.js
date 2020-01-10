import React from 'react'
import './LoanSchemeTable.css'

function LoanSchemeTable({ vehicle, localeStringSpecs, uk }) {
    return (

        < table >
            <thead></thead>
            <caption></caption>
            <tbody>
                <tr>
                    <th>Vehicle Price</th>
                    <th>Deposit Amount</th>
                    <th>Delivery Date</th>
                    <th>Finance Years</th>
                </tr>
                <tr>
                    <td>{vehicle.price.toLocaleString(uk, localeStringSpecs)}</td>
                    <td>{vehicle.depositAmount.toLocaleString(uk, localeStringSpecs)}</td>
                    <td>{vehicle.deliveryDate.toLocaleString(uk, localeStringSpecs)}</td>
                    <td>{vehicle.financeOption.toLocaleString(uk, localeStringSpecs)}</td>
                </tr>
            </tbody>
        </table >
    )
}

export default LoanSchemeTable