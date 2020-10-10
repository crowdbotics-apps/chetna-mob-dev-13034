import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012073Navigator from '../features/BlankScreen012073/navigator';
import BlankScreen212071Navigator from '../features/BlankScreen212071/navigator';
import BlankScreen312070Navigator from '../features/BlankScreen312070/navigator';
import BlankScreen112049Navigator from '../features/BlankScreen112049/navigator';
import BlankScreen012045Navigator from '../features/BlankScreen012045/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012073: { screen: BlankScreen012073Navigator },
BlankScreen212071: { screen: BlankScreen212071Navigator },
BlankScreen312070: { screen: BlankScreen312070Navigator },
BlankScreen112049: { screen: BlankScreen112049Navigator },
BlankScreen012045: { screen: BlankScreen012045Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
