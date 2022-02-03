import { View, Text, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Container, Render, Images, Textstyle, TextContent, Button, Tambah } from '../styled/UlasStyled';
import { DataUlasan } from '../Data/DataUlas';
const WaitUlas = ({navigation}) => {
    return (
        <Container>
            <FlatList
                data={DataUlasan}
                keyExtractor={(item) => (item.id)}
                renderItem={({ item }) => (
                    <Render>
                        <Images source={item.image} />
                        <TextContent>
                            <Textstyle color="#464646">{item.title}</Textstyle>
                            <Textstyle>{item.jumlah}</Textstyle>
                            <Tambah>
                                <Textstyle color="#464646" weight="700" size="16px">{item.harga}</Textstyle>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('tulisulasan', {
                                    image: item.image,
                                    title: item.title,
                                    harga: item.harga,
                                    jumlah: item.jumlah,
                                    paket: item.paket
                                })}>
                                    <Button>
                                        <Textstyle color="#0033A0">Tulis Ulasan</Textstyle>
                                    </Button>
                                </TouchableWithoutFeedback>
                            </Tambah>
                        </TextContent>
                    </Render>
                )}
            />
        </Container>
    );
};

export default WaitUlas;
