import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//import Abertura from './pages/Abertura';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';


const Routes = createAppContainer(
    createSwitchNavigator({
        //Abertura,
        Login,
        Cadastro
    })
);


export default Routes;