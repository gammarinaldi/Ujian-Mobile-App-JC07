import { createBottomTabNavigator } from 'react-navigation';
import Homepage from './Homepage';
import Profile from './Profile';

export default createBottomTabNavigator(
    {
        Home: {
            screen: Homepage
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);