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
};

const MiddleSection = () => {
    return(
        <View>
            <Text style={{color:'#fff',fontSize:20,textAlign:"center", marginBottom:30}}>Halo middle section</Text>

            <View style={{marginBottom:20}}>
                <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:'100%', height:100}} />
            </View>
        </View>
    )
}

const PropsDinamis = () => {
    return(
        <ScrollView  showsVerticalScrollIndicator={false}>
            <View>
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold"}}>React Native App</Text>
                <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection:'row'}}>
                        <Story title="Judul Satu" img="https://picsum.photos/200/300" />
                        <Story title="Judul Dua" img="https://picsum.photos/200/300" />
                        <Story title="Judul Tiga" img="https://picsum.photos/200/300" />
                        <Story title="Judul Empat" img="https://picsum.photos/200/300" />
                        <Story title="Judul Lima" img="https://picsum.photos/200/300" />
                        <Story title="Judul Enam" img="https://picsum.photos/200/300" />
                        <Story title="Judul Tujuh" img="https://picsum.photos/200/300" />
                        <Story title="Judul Delapan" img="https://picsum.photos/200/300" />
                        <Story title="Judul Sembilan" img="https://picsum.photos/200/300" />
                    </View>
                </ScrollView>
            
                <View style={{
                    backgroundColor:"#123",
                    marginTop:20,
                    padding:30
                }}>
                    <MiddleSection/>
                    <MiddleSection/>
                    <MiddleSection/>
                    <MiddleSection/>
                    <MiddleSection/>
                    <MiddleSection/>
                </View>

            </View>
        </ScrollView>
    )
}

export default PropsDinamis;