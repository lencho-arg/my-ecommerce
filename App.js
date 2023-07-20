import { useFonts } from 'expo-font'
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/JosefinSans/JosefinSans-SemiBoldItalic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Navigator/>
  );
}
