import React from 'react'
import './LoanSchemeTable.css'

function LoanSchemeTable({ vehicle, localeStringSpecs, uk }) {
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