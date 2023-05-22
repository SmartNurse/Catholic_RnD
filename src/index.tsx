import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from 'react-ga';

const TRACKING_ID: any = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID; // 발급받은 추적ID를 환경 변수로 불러온다.
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
