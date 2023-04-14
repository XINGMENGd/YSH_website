import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import render from './helpers/render';


render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


if (process.env.NODE_ENV === 'development') {
    require('./mock/index'); // 开启mock
    const VConsole = require('vconsole');
    var vConsoler = new VConsole();
    console.log('development')
}




