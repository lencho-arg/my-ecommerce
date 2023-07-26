import { useFonts } from 'expo-font'
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import Store from './src/Store/store'

export default function App() {

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/JosefinSans/JosefinSans-SemiBoldItalic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <Navigator/>
    </Provider>
  );
}
