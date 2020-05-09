import React from 'react'
import { Text, View, SafeAreaView , TextInput} from 'react-native'

import PropsDinamis from './components/propsDinamis'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <PropsDinamis />
      </View>
    </SafeAreaView>
  )
}

export default App;