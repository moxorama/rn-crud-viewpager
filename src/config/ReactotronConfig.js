import { NativeModules } from "react-native";

import Reactotron from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux'

let reactotron = null;

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];


  reactotron = Reactotron
    .configure({ host: scriptHostname, port: 9090, name: 'Demo' }) // controls connection & communication settings
    .use(apisaucePlugin())
    .use(reactotronRedux())
    .useReactNative({
      networking: false,
    }) // add all built-in react native plugins
    .connect();

  console.log = Reactotron.log;
}

export default reactotron;
