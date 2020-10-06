import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'lightblue'}}>
            <Text style={{ color:'dodgerblue', fontWeight:'200', fontSize:25}}>Stan's</Text>
            <Text style={{ color:'dodgerblue', fontWeight:'200', fontSize:25}}>Try 100</Text>
            <Text style={{ fontWeight:'bold', fontSize:32, color:'dodgerblue'}}>App Center Test</Text>
        </View>
    )
}

export { App }
