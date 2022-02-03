import { View, Text, ImageBackground, TextInput, Image, TouchableNativeFeedback, FlatList } from 'react-native';
import React from 'react';
import garasiku from '../asset/garasiku.png'
import { Container, Header, InputText, AlamatContainer, Top, Body, BodyView, TopView, Textstyle, TopContainer, Images, TambahAlamat, TambahView } from '../styled/alamatStyled';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { Datalamat } from '../Data/DataAlamat';
const Address = ({ navigation }) => {
    return (
        <Container>
            <ImageBackground source={garasiku}>
                <Header>
                    <AntDesign name="search1" size={18} color={"#fff"}/>
                    <InputText placeholder='Cari alamat' placeholderTextColor={'#fff'} />
                </Header>
            </ImageBackground>
            <FlatList
                data={Datalamat}
                keyExtractor={(item) => (item.key)}
                renderItem={({ item }) => (
                    <AlamatContainer>
                        <TopContainer>
                            <Top>
                                <TopView bcolor="#EBF1FF" pad="2px 4px 2px 4px" pad={item.badge != '' ? "2px 4px 2px 4px" : "0px"} dis={item.badge != '' ? "flex" : "none"}>
                                    <Textstyle color="#0033A0">{item.badge}</Textstyle>
                                </TopView>
                                <Textstyle>{item.label}</Textstyle>
                            </Top>
                            <Top>
                                <TouchableNativeFeedback onPress={() => navigation.navigate('carialamat')}>
                                    <TopView bcolor="#0033A0" pad="5px 10px 5px 10px">
                                        <Textstyle color="#fff">Ubah Alamat</Textstyle>
                                    </TopView>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback>
                                    <TopView bcolor="#DD3556" pad="5px 10px 5px 10px">
                                        <Textstyle color="#fff">Hapus</Textstyle>
                                    </TopView>
                                </TouchableNativeFeedback>
                            </Top>
                        </TopContainer>
                        <Textstyle weight="600" color="#000">{item.nama}</Textstyle>
                        <Textstyle>{item.nohp}</Textstyle>
                        <BodyView>
                            <Images source={item.location} />
                            <Body>
                                <Textstyle>{item.alamat}</Textstyle>
                                <Textstyle>Catatan : <Textstyle>{item.notes}</Textstyle></Textstyle>
                            </Body>
                        </BodyView>
                    </AlamatContainer>
                )}
            />
            <TambahAlamat>
                <TouchableNativeFeedback onPress={() => navigation.navigate("formalamat")}>
                    <TambahView>
                        <Textstyle color="blue" weight="600" size="18px">Tambah Alamat baru</Textstyle>
                    </TambahView>
                </TouchableNativeFeedback>
            </TambahAlamat>
        </Container>
    );
};

export default Address;
