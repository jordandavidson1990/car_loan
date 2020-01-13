import React, { useState } from 'react'
import moment from 'moment'
import './PaybackTable'

function PaybackTable({ vehicle, localeStringSpecs, uk }) {

    const [currentPaymentDate] = useState(vehicle.deliveryDate)
    // number of rows will the number of finance years * months in a year
    const numberOfRowsNeeded = vehicle.financeOption * 12;


    const getDate = (date) => {
        // will return the number of the day of the week it responds on
        const momentDate = moment(date);
        const stringDate = momentDate._i;
        const formattedDate = new Date(stringDate);
        const startOfMonth = new Date(formattedDate.getFullYear(), formattedDate.getMonth() + 1, 1);
        return startOfMonth
    }

    const getFirstPayment = (date) => {
        // first payment is the first monday the following month
        const nextMonthFirst = getDate(date)
        let first = null
        for (let i = 0; i <= 7; i++) {
            let j = (new Date(moment(nextMonthFirst.setDate(nextMonthFirst.getDate() + 1))))
            // console.log(j.getDay())
            if (j.getDay() === 1) {
                first = j
            }
        }

        return first.toDateString()
    }

    const nextMonth = (numberOfMonthsAwayFromStart) => {

        const currentDate = currentPaymentDate
        const dateForm = new Date(currentDate)

        const current = new Date(dateForm.setMonth
            (dateForm.getMonth() + numberOfMonthsAwayFromStart))
        const start = getDate(current)
        let first = null
        for (let i = 0; i <= 7; i++) {
            let j = (new Date(moment(start.setDate(start.getDate() + 1))))
            if (j.getDay() === 1) {
                first = j
            }
        }
        return first.toDateString()
    }

    function totalRepayment() {
        // total is price - deposit then plus the start fee and  end fee
        const amount = (parseInt(vehicle.price) - parseInt(vehicle.depositAmount)) + (parseInt(vehicle.startFee) + parseInt(vehicle.endFee))

        const formattedTotal = parseFloat(amount).toLocaleString(uk, localeStringSpecs)
        return formattedTotal
    }

    function paybackColumn(numberOfRowsNeeded) {
        // calculate how much pay is required each month minus deposit
        const paybackEachMonth = (vehicle.price - vehicle.depositAmount) / numberOfRowsNeeded
        // first month add on arrangement fee
        const startFee = parseInt(vehicle.startFee)
        const firstMonth = paybackEachMonth + startFee
        const formattedFirstMonthPayment = firstMonth.toLocaleString(uk, localeStringSpecs)
        let rowsArray = []
        if (numberOfRowsNeeded) {
            rowsArray.push(
                <tr key={66}>
                    <th>1</th>
                    <td>{formattedFirstMonthPayment}</td>
                    <td>{getFirstPayment(vehicle.deliveryDate)}</td>
                    <td>Includes £{vehicle.startFee.toLocaleString(uk, localeStringSpecs)} arrangement fee.</td>
                </tr>
            )

            for (let i = 1; i < numberOfRowsNeeded - 1; i++) {
                rowsArray.push(
                    <tr key={i}>
                        <th>{i + 1}</th>
                        <td>{paybackEachMonth.toLocaleString(uk, localeStringSpecs)}</td>
                        <td>{nextMonth(i)}</td>
                        <td></td>
                    </tr>
                )
            }
            // last payment incurs additional charge of £20
            let finalPayment = paybackEachMonth + parseInt(vehicle.endFee)
            const formattedPayment = finalPayment.toLocaleString(uk, localeStringSpecs)

            rowsArray.push(
                <tr key={'final'}>
                    <th>{numberOfRowsNeeded}</th>
                    <td>{formattedPayment}</td>
                    <td>{nextMonth(numberOfRowsNeeded)}</td>
                    <td>Includes £{vehicle.endFee} completion fee.</td>
                </tr>
            )
            rowsArray.push(
                <tr key={'total'}>
                    <th>Total</th>
                    <td>{totalRepayment()}</td>

                </tr>
            )
        }
        return rowsArray
    }

    return (
        <table>
            <thead></thead>
            <caption>Repayment Plan</caption>
            <>
                <tbody>
                    <tr>
                        <th>Month</th>
                        <th>Repayment</th>
                        <th>Payment Date</th>
                        <th>Notes</th>
                    </tr>
                    <>
                        {paybackColumn(numberOfRowsNeeded)}
                    </>

                </tbody>
            </>

        </table >
    )
}

export default PaybackTable