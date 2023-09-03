import { useEffect } from 'react';
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';

import Navigator from './src/Navigation/Navigator';
import Store from './src/Store/store'
import { init } from './src/SQLite';
import { font } from './src/Assets/Fonts/index';

export default function App() {

  useEffect(()=> {
    init()
      .then((result)=> {
      })
      .catch(err => {
    })
  }, [])

  const [fontsLoaded] = useFonts(font);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <Navigator/>
    </Provider>
  );
}
