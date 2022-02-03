import { View, Text, ImageBackground, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import { Container, SubContainer, Textstyle, InputForm, Pickers, MyLoc, Simpan, InputText, Header } from '../styled/alamatStyled';
import garasiku from '../asset/garasiku.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import lok from '../asset/lok.png'
import { Picker } from '@react-native-picker/picker';
const CariAlamat = () => {
    return (
        <Container bcolor="#F5F5F5">
            <ImageBackground source={garasiku}>
                <Header>
                    <AntDesign name="search1" size={18} color={"#fff"} />
                    <InputText placeholder='Cari produk saya' placeholderTextColor={'#fff'} />
                </Header>
            </ImageBackground>
            <SubContainer style={{ flex: 1 }}>
                <MyLoc>
                    <Image source={lok} style={{ marginRight: 10 }} />
                    <Textstyle color="#0033A0" weight="700">Gunakan Lokasi saya saat ini</Textstyle>
                </MyLoc>
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Provinsi</Textstyle>
                <Pickers>
                    <Picker>
                        <Picker.Item label="DKI Jakarta" value="DKI Jakarta" />
                        <Picker.Item label="Jawa Barat" value="Jawa Barat" />
                    </Picker>
                </Pickers>
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Kecamatan</Textstyle>
                <Pickers>
                    <Picker>
                        <Picker.Item label="Kebayoran Baru" value="Kebayoran Baru" />
                        <Picker.Item label="Kembangan" value="Kembangan" />
                    </Picker>
                </Pickers>
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Kode Pos</Textstyle>
                <InputForm placeholder='Masukan alamat' mtop="10px" m="10px 0px 10px 0px" />
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Alamat pengiriman</Textstyle>
                <InputForm placeholder='Masukan keterangan' m="10px 0px 10px 0px" />
                <TouchableWithoutFeedback>
                    <Simpan>
                        <Textstyle weight="700" color="#0033A0" size="16px">Simpan Alamat</Textstyle>
                    </Simpan>
                </TouchableWithoutFeedback>
            </SubContainer>
        </Container>
    );
};

export default CariAlamat;
