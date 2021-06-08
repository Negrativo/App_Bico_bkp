import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

//import Abertura from './pages/Abertura';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';


const Routes = createAppContainer(
    createSwitchNavigator({
        //Abertura,
        Login,
        Cadastro        
    }),

    createBottomTabNavigator({
        Principal
    })
);


export default Routes;