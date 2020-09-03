if(__DEV__) {
  import('./ReactotronConfig')
}
import * as React from 'react';
import Routes from './src/routes'
import { Provider } from 'react-redux'
import store from './src/store'


function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;