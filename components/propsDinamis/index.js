import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const Story = (props) => {
    var story = [];

	for(let i = 0; i < 100; i++){

		story.push(
			<View style={{width:100}} key={i}>
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
                }}>{`${props.title}  ${i+1}`}</Text>
            </View>
		)
	}
    return (
        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row'}}>                
                {story}
            </View>
        </ScrollView>
    )
};

const MiddleSection = (props) => {
    return(
        <View>
            <Text style={{color:'#fff',fontSize:20,textAlign:"center", marginBottom:30}}>{props.title}</Text>

            <View style={{marginBottom:20}}>
                <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:'100%', height:300}} />
            </View>
        </View>
    )
}

const PropsDinamis = () => {
    return(
        <ScrollView  showsVerticalScrollIndicator={false}>
            <View>
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold"}}>React Native App</Text>
                <Story title="Title" img="https://picsum.photos/200/300" />

                <View style={{
                    backgroundColor:"#123",
                    marginTop:20,
                    padding:30
                }}>
                    <MiddleSection title="Section One"/>
                    <MiddleSection title="Section Two"/>
                    <MiddleSection title="Section Three"/>
                    <MiddleSection title="Section Four"/>
                    <MiddleSection title="Section Five"/>
                    <MiddleSection title="Section Six"/>
                </View>

            </View>
        </ScrollView>
    )
}

export default PropsDinamis;