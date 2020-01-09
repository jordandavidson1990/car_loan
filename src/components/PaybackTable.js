import React from 'react'

function PaybackTable({ vehicle, localeStringSpecs, uk }) {
    // number of rows will the number of finance years * months in a year
    const numberOfRowsNeeded = vehicle.financeOption * 12;

    function paybackColumn(numberOfRowsNeeded) {
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