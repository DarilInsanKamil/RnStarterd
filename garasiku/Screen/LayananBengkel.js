import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Container, Render, Diskon, Progbar, Fill, Images, Progress, Textstyle, Fav, TextContent, FavDiskon, Rating } from '../styled/favoriteStyled';
import { DataFav } from '../Data/DataFavorite';
import AntDesign from 'react-native-vector-icons/AntDesign'
const res = DataFav.filter(function (e) {
    return e.alamat === "Shop&Drive Hybrida, Jakarta Utara"
})
const LayananBengkel = () => {
    return (
        <Container>
            <FlatList
                data={res}
                keyExtractor={(item) => (item.id)}
                renderItem={({ item }) => (
                    <Render>
                        <Images source={item.image} style={{ resizeMode: 'cover', width: 100, height: 135 }} />
                        <TextContent>
                            <Fav>
                                <Textstyle style={{ flex: 1 }}>{item.title}</Textstyle>
                                <AntDesign name="heart" size={26} />
                            </Fav>
                            <FavDiskon>
                                <Images source={item.label} />
                                <Diskon>
                                    <Textstyle color="#fff">20%</Textstyle>
                                </Diskon>
                                <Textstyle textd="line-through">{item.harga}</Textstyle>
                            </FavDiskon>

                            <FavDiskon>
                                <Images source={item.location} />
                                <Textstyle>{item.alamat}</Textstyle>
                            </FavDiskon>
                            <Rating>
                                <Textstyle size="16px" weight="700">{item.hargad}</Textstyle>
                                <FavDiskon>
                                    <AntDesign name="star" color="yellow" />
                                    <Text>{item.review}</Text>
                                </FavDiskon>
                            </Rating>
                            <Progbar>
                                <Progress>
                                    <Fill wid={item.stock}>
                                    </Fill>
                                </Progress>
                                <Textstyle>Stok sedikit lagi</Textstyle>
                            </Progbar>
                        </TextContent>
                    </Render>
                )}
            />
        </Container>
    );
};

export default LayananBengkel;
