import React from 'react';
import PieChartComponent from '../ChartJS/ChartJS';
import RD3Component from '../D3JS.js/D3JS';


function HomePage() {
  return (
    <main className="center" id="main">
        <div className="page-area">
        <article>
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article>
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

    <section className="container center" id="main">        
            <PieChartComponent/>
    </section>

    <section className="container center" id="main">
            <h1>
                D3JS Chart
            </h1>
            <RD3Component/>
            <svg></svg>
    </section>
    </div>
    </main>
  );
}

export default HomePage;