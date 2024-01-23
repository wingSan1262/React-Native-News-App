import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParentStackParamList} from './type';
import * as screens from '../../feature/screen';

const ParentStack = createNativeStackNavigator<ParentStackParamList>();

export const NavigationGraph = () => {
  return (
    <ParentStack.Navigator
      initialRouteName={'NewsList'}
      screenOptions={{
        gestureEnabled: false,
        headerTintColor: '#000',
      }}>
      <ParentStack.Screen
        name={'NewsList'}
        component={screens.NewsList}
        options={{headerShown: false}}
      />
      <ParentStack.Screen
        name={'NewsDetail'}
        component={screens.NewsDetail}
        options={{headerShown: false}}
      />
    </ParentStack.Navigator>
  );
};
