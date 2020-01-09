import React from 'react'
import moment from 'moment'

function PaybackTable({ vehicle, localeStringSpecs, uk }) {
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
        // debugger
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

    function paybackColumn(numberOfRowsNeeded) {
        // const date = getDate(vehicle.deliveryDate)
        const firstDatePastMonth = getFirstPayment(vehicle.deliveryDate)
        console.log(firstDatePastMonth)
        // calculate how much pay is required each month minus deposit
        const paybackEachMonth = (vehicle.price - vehicle.depositAmount) / numberOfRowsNeeded
        // first month add on £88 arrangement fee
        const firstMonth = paybackEachMonth + 88
        let rowsArray = []
        if (numberOfRowsNeeded) {
            rowsArray.push(
                <tr key={66}>
                    <th>Month: 1</th>
                    <th>{firstMonth.toLocaleString(uk, localeStringSpecs)}</th>
                    <th>{getFirstPayment(vehicle.deliveryDate)}</th>
                </tr>
            )

            for (let i = 1; i < numberOfRowsNeeded - 1; i++) {
                rowsArray.push(
                    <tr key={i}>
                        <th>Month:{i + 1}</th>
                        <th>{paybackEachMonth.toLocaleString(uk, localeStringSpecs)}</th>
                    </tr>
                )
            }
            // last payment incurs additional charge of £20
            const finalPayment = paybackEachMonth + 20
            rowsArray.push(
                <tr key={-1}>
                    <th>Month:{numberOfRowsNeeded}</th>
                    <th>{finalPayment.toLocaleString(uk, localeStringSpecs)}</th>
                </tr>
            )
        }
        return rowsArray
    }

    return (
        <table>
            <thead></thead>
            <>
                <tbody>
                    <tr>
                        <th>Month</th>
                        <th>Repayment</th>
                        <th>Payment Date</th>
                    </tr>
                    <>
                        {paybackColumn(numberOfRowsNeeded)}
                    </>

                </tbody>
            </>

        </table >
    )
}

{/* <tr>
                    {rows(numberOfRowsNeeded)}
                </tr> */}

export default PaybackTable