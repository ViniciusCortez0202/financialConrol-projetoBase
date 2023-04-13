import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './src/routes/Stacks';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoute/>
    </NavigationContainer>
  );
}

