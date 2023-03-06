import * as React from 'react';
import Naviation from './src/navigations/config';
import {NativeBaseProvider} from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <Naviation />
    </NativeBaseProvider>
  );
}

export default App;
