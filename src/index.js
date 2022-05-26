import React from 'react';
import ReactDOM from 'react-dom/client';

/**/
 import App from './Test_loadTour';
//  import App from './Test_petTour';
/*/
import App from './App';
/**/

import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlbalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlbalStyles/>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


