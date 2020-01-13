import React from 'react'
import PropTypes from 'prop-types'
import './LoanSchemeTable.css'

function LoanSchemeTable({ vehicle, localeStringSpecs, uk }) {
    return (
        < table >
            <thead></thead>
            <caption>Car Price Summary</caption>
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

LoanSchemeTable.propTypes = {
    vehicle: PropTypes.object,
    localeStringSpecs: PropTypes.string,
    uk: PropTypes.string
}

export default LoanSchemeTable