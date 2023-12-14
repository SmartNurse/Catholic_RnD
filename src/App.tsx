import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import Provider from 'components/Provider';
import RouterContainer from 'routes';

// Sentry.init({
//   dsn: 'https://87456bedc9d24d0ca1ff5b655d4e5914@o1390871.ingest.sentry.io/6712354',
//   integrations: [new BrowserTracing()],

//   tracesSampleRate: 1.0,
// });

function App() {
  return (
    <Provider>
      <RouterContainer />
    </Provider>
  );
}

export default App;
