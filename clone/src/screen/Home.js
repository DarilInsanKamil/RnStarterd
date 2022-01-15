import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet, Image, FlatList } from 'react-native'
import { BottomNav, Container, NavigateBottom, NavigationTop, TextApp, Story, Feed, Content } from '../styled/home.Styled'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import sa from '../sa.png';
import mi from '../mi.png';
import jeong from '../jeong.png';
import ji from '../ji.png';
import da from '../da.png';
import nay from '../nay.png';
import chae from '../chae.png';
import mom from '../mo.png';
import tzu from '../tzu.png';
import Tzuyu from '../tzuyu.png';
import Mina from '../mina.png';
import Sana from '../sana.png';
import Jihyo from '../jihyo.png';



export default function Home() {
    const styles = StyleSheet.create({
        Dm: {
            transform: [{ rotate: "45deg" }]
        },
        sana: {
            width: 80,
            height: 80,
            marginRight: 10,
            backgroundColor: 'red',
            borderRadius: 50,
            padding: 5
        },
        feedProfile: {
            width: 50,
            height: 50,
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 7.49,
            elevation: 12,
        },
        feedImage: {
            alignItems: 'center',
        },
        Profile: {
            flexDirection: 'row',
            marginVertical: 20
        },
        storyProfile: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        txtProfile: {
            fontSize: 18,
            fontWeight: '700',
            marginLeft: 10
        }
    })
    const Data = [
        {
            id: Math.floor(Math.random() * 1000),
            image: mi,
            name: 'Mina',
            image_feed: Tzuyu
        },
        {
            id: Math.floor(Math.random() * 1000),
            image: sa,
            name: 'Sana',
            image_feed: Jihyo
        },
        {
            id: Math.floor(Math.random() * 1000),
            image: nay,
            name: 'Nayeon',
            image_feed: Mina
        },
        {
            id: Math.floor(Math.random() * 1000),
            image: jeong,
            name: 'Jeonyeon',
            image_feed: Sana
        },
        {
            id: Math.floor(Math.random() * 1000),
            image: ji,
            name: 'Jihyo',
            image_feed: Mina
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: 'Chaeng',
            image: chae,
            image_feed: Jihyo
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: 'Dahyun',
            image: da,
            image_feed: Tzuyu
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: 'Tzu',
            image: tzu,
            image_feed: Sana
        },
        {
            id: Math.floor(Math.random() * 1000),
            name: 'MoMo',
            image: mom,
            image_feed: Mina
        },
    ]
    return (
        <Container>
            <NavigationTop>
                <TextApp>cloneStagram</TextApp>
                <TouchableNativeFeedback>
                    <MaterialIcons name="navigation" size={32} style={styles.Dm} />
                </TouchableNativeFeedback>
            </NavigationTop>
            <Content nestedScrollEnabled={true}>
                <Story>
                    <FlatList
                    nestedScrollEnabled
                        style={styles.story}
                        data={Data}
                        keyExtractor={(item, index) => item.id.toLocaleString()}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={styles.storyProfile}>
                                <Image source={item.image} resizeMode={'cover'} style={styles.sana} />
                                <Text>{item.name}</Text>
                            </View>
                        )}
                    />
                </Story>
                <Feed>
                    <FlatList
                    nestedScrollEnabled
                        style={styles.feed}
                        data={Data}
                        keyExtractor={(item, index) => item.id.toLocaleString()}
                        renderItem={({ item }) => (
                            <View style={styles.feed2}>
                                <View style={styles.Profile}>
                                    <Image source={item.image} resizeMode={'cover'} style={styles.feedProfile} />
                                    <Text style={styles.txtProfile}>{item.name}</Text>
                                </View>
                                <View style={styles.feedImage}>
                                    <Image source={item.image_feed} resizeMode={'cover'} />
                                </View>
                                <Text style={styles.txtProfile}>{item.name}</Text>
                            </View>
                        )}
                    />
                </Feed>
            </Content>
            <NavigateBottom>
                <BottomNav style={styles.shadow}>
                    <TouchableNativeFeedback>
                        <MaterialIcons name="home-filled" size={32} color="black" />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <MaterialIcons name="search" size={32} />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <MaterialIcons name="add" size={32} />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <FontAwesome name="heart-o" size={28} />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <MaterialIcons name="person" size={32} />
                    </TouchableNativeFeedback>
                </BottomNav>
            </NavigateBottom>
        </Container>
    )
}
