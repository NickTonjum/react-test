import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ReactECharts from 'echarts-for-react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Click Button To Count</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
};

export default App;
