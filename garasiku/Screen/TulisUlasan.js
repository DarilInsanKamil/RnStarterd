import { View, Text, ImageBackground, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Container, Images, Detail, TextContent, Textstyle, Sep, InputText, FormUlasan, TambahFoto, ButtonFoto, SimpanUlasan, ButtonSave } from '../styled/UlasStyled';
import BACKGROUND2 from '../asset/BACKGROUND2.png';
import { AirbnbRating } from 'react-native-ratings';
const TulisUlasan = ({ route }) => {
    const {
        image,
        title,
        jumlah,
        harga,
        paket
    } = route.params
    const UselessTextInput = (props) => {
        return (
            <TextInput
                {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable
            />
        );
    }
    const [value, setValue] = useState("Barang diterima dengan Baik, maju terus Astraotoshop.com")
    return (
        <Container>
            <ImageBackground source={BACKGROUND2} style={{ paddingBottom: 55 }}></ImageBackground>
            <Detail>
                <Images source={image} />
                <TextContent>
                    <Textstyle color="#464646">{title}</Textstyle>
                    <Textstyle>{jumlah}</Textstyle>
                    <Textstyle color="#464646" weight="700" size="16px">{harga}</Textstyle>
                </TextContent>
            </Detail>
            <FormUlasan>
                <Sep></Sep>
                <AirbnbRating
                    count={5}
                    defaultRating={0}
                    size={35}
                    showRating={false}
                />
                <Sep></Sep>
                <Textstyle>Tulis Ulasan Anda</Textstyle>
                <InputText>
                    <UselessTextInput
                        multiline
                        numberOfLines={2}
                        value={value}
                        onChangeText={text => setValue(text)}
                        style={{ padding: 10 }}
                    />
                </InputText>
                <Textstyle>Tambahkan Foto Video</Textstyle>
                <TambahFoto>
                    <Images source={paket} />
                    <ButtonFoto>
                        <Textstyle size="32px" color="#0033A0" weight="normal">+</Textstyle>
                    </ButtonFoto>
                </TambahFoto>
            </FormUlasan>
            <SimpanUlasan>
                <ButtonSave>
                    <Textstyle size="16px" color="#0033A0" weight="700">Simpan</Textstyle>
                </ButtonSave>
            </SimpanUlasan>
        </Container>

    );
};

export default TulisUlasan;
