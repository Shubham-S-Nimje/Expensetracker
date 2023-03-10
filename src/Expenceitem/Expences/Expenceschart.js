import React from 'react'
import Chart from '../Chart/Chart'
const Expenceschart = (props) => {
    const ChartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Set', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.Expencedate.getMonth();
        ChartDataPoints[expenseMonth].value += expense.Expenceprice;
    }

    return (
      <div>
        <Chart datapoints = {ChartDataPoints} />
      </div>
    )
  }

  export default Expenceschart;
