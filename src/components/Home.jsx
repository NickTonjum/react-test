import { useState } from 'react';
import '../App.css';
import ReactECharts from 'echarts-for-react';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <h3>Hello this is the Home page</h3>
      <h4>This app is an example of using the vite builder with React.js</h4>
      <div className="card">
        <h5 class="frow row-start">Click Button To Count</h5>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br></br>
        <ReactECharts option={{
          title: {
            text: 'ECharts Getting Started Example'
          },
          tooltip: {},
          xAxis: {
            data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
          },
          yAxis: {},
          series: [
            {
              name: 'sales',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }} />
      </div>
    </div>
  )
};

export default Home;
