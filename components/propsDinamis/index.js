import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const Story = (props) => {
    return (
        <View
            style={{width:100}}
        >
            <Image 
                source={{uri: props.img}}  
                style={{
                    width:80, height:80,marginTop:20, marginLeft:10,
                    borderRadius:50,
                    marginBottom:10
                }}
            />
            <Text style={{
                textAlign:"center",
                maxWidth: 100
            }}>{props.title}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return(
        <View>
            <Text style={{textAlign:"center", fontSize:20, textDecorationLine:"underline"}}>Belajar React Native</Text>
            <ScrollView horizontal>
                <View style={{flexDirection:'row'}}>
                    <Story title="Judul Satu" img="https://picsum.photos/200/300" />
                    <Story title="Judul Dua" img="https://picsum.photos/200/300" />
                    <Story title="Judul Tiga" img="https://picsum.photos/200/300" />
                    <Story title="Judul Empat" img="https://picsum.photos/200/300" />
                    <Story title="Judul Lima" img="https://picsum.photos/200/300" />
                </View>
            </ScrollView>

        </View>
    )
}

export default PropsDinamis;