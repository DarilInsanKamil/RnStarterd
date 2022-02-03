import { View, Text, ImageBackground, TextInput, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import garasiku from '../asset/garasiku.png'
import { Container, SubContainer, InputForm, Textstyle, TambahAlamat, TambahView, Toggles, Toggel, Slider } from '../styled/alamatStyled';
export default function FormAlamat() {
    const [togle, setTogle] = useState(false)
    const handleTogle = () => {
        setTogle(!togle)
    }

    return (
        <Container bcolor="#F5F5F5">
            <ImageBackground source={garasiku} style={{ paddingBottom: 55 }}>
            </ImageBackground>
            <SubContainer>
                <Text>Penerima</Text>
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Nama Lengkap</Textstyle>
                <InputForm placeholder='Masukan nama' />
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">No. Handphone</Textstyle>
                <InputForm placeholder='Masukan no.handphone' />
            </SubContainer>
            <SubContainer>
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Alamat</Textstyle>
                <InputForm placeholder='Masukan alamat' />
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Keterangan</Textstyle>
                <InputForm placeholder='Masukan keterangan' />
            </SubContainer>
            <SubContainer style={{ flex: 1 }}>
                <Textstyle color="#434343" mtop="5px 0px 5px 0px">Tandai sebagai</Textstyle>
                <InputForm placeholder='Masukan label' />
                <Toggles>
                    <Textstyle color="#616161">Atur alamat ini sebagai alamat utama</Textstyle>
                    <TouchableWithoutFeedback onPress={handleTogle}>
                        <Toggel>
                            <Slider aself={togle ? "flex-end" : "auto"}></Slider>
                        </Toggel>
                    </TouchableWithoutFeedback>
                </Toggles>
            </SubContainer>
            <TambahAlamat>
                <TambahView bord="0px solid rgba(0,0,0, 0)" bcolor="#0033A0"><Textstyle size="18px" color="#fff" weight="700">Simpan</Textstyle></TambahView>
            </TambahAlamat>
        </Container>
    );
}
