import { View, Text, Image, ImageBackground, TouchableNativeFeedback, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import {
    Container, 
    Header, 
    Profile, 
    Level, 
    TxtDash, 
    Name, 
    TxtName, 
    Poin, 
    RefPoin, 
    RefContainer, 
    ViewRefPoin, 
    RiwayatContainer,
    BoxRiwayat, 
    IconTxt, 
    KuponContainer, 
    EmptyKupon, 
    AddContainer, 
    AddVehicle, 
    TextAdd
} from '../styled/dashStyled';
import { Data } from '../Data/Data'
const DashboardEmpty = () => {
    let bag, dikirim, money, poin, setting, levelicons, referal, arrow, headeimg, proses, garasiku
    const datas = Data.map((e) => {
        return (
            bag = e.bag,
            dikirim = e.dikirim,
            money = e.money,
            poin = e.poins,
            setting = e.settings,
            levelicons = e.levelicon,
            arrow = e.arrows,
            referal = e.referals,
            headeimg = e.headerimg,
            proses = e.proses,
            garasiku = e.garasiku
        )
    })
    useEffect(() => {
        datas
    }, [])
    return (
        <Container>
            <ScrollView>

                {/* Header */}

                <Header style={{ paddingBottom: 60 }}
                    imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, overflow: 'hidden' }} source={headeimg}>
                    <Profile>
                        <TxtDash>AO</TxtDash>
                        <Name>
                            <TxtName>Astra Otowati</TxtName>
                            <Level>
                                <TouchableNativeFeedback onPress={() => console.log("test")}>
                                    <Poin>
                                        <Image source={levelicons} />
                                        <TxtName size="12px" weight="600">Member Bronze</TxtName>
                                    </Poin>
                                </TouchableNativeFeedback>
                                <Image source={arrow} />
                            </Level>
                        </Name>
                    </Profile>
                    <TouchableNativeFeedback>
                        <Image source={setting} />
                    </TouchableNativeFeedback>
                </Header>

                {/* Poin and Referal */}

                <RefContainer>
                    <RefPoin>
                        <Image source={poin} />
                        <ViewRefPoin>
                            <TxtName color="#616161" size="12px" weight="normal">Poin saya</TxtName>
                            <TxtName color="#0033A0" weight="normal">25.000</TxtName>
                        </ViewRefPoin>
                    </RefPoin>
                    <RefPoin>
                        <Image source={referal} />
                        <ViewRefPoin>
                            <TxtName color="#616161" size="12px" weight="normal">Bagikan</TxtName>
                            <TxtName weight="normal" color="#313131">Referalmu</TxtName>
                        </ViewRefPoin>
                    </RefPoin>
                </RefContainer>

                {/* Riwayat Belanja */}

                <RiwayatContainer>
                    <TxtName color="#000" size="18px">Riwayat belanja</TxtName>
                    <BoxRiwayat>
                        <IconTxt inputM="10px">
                            <Image source={money} />
                            <TxtName size="12px" color="#616161" weight="normal">Pemabayaran</TxtName>
                        </IconTxt>
                        <IconTxt>
                            <Image source={proses} />
                            <TxtName size="12px" color="#616161" weight="normal">Dalam proses</TxtName>
                        </IconTxt>
                        <IconTxt>
                            <Image source={dikirim} />
                            <TxtName size="12px" color="#616161" weight="normal">Sedang dikirim</TxtName>
                        </IconTxt>
                        <IconTxt>
                            <Image source={bag} />
                            <TxtName size="12px" color="#616161" weight="normal">Selesai</TxtName>
                        </IconTxt>
                    </BoxRiwayat>
                </RiwayatContainer>

                {/* Kupon */}

                <KuponContainer>
                    <TxtName color="#000" size="18px">Kupon Diskon Saya</TxtName>
                    <EmptyKupon>
                        <TxtName weight="normal" color="#BCBCBC" size="12px">Anda tidak memiliki kupon diskon</TxtName>
                    </EmptyKupon>
                </KuponContainer>
                <KuponContainer>
                    <TxtName color="#000" size="18px">E-voucher Service Saya</TxtName>
                    <EmptyKupon>
                        <TxtName weight="normal" color="#BCBCBC" size="12px">Anda tidak memiliki e-voucher</TxtName>
                    </EmptyKupon>
                </KuponContainer>

                {/* Tamabah Kendaraan */}

                <AddContainer source={garasiku}>
                    <TextAdd>
                        <TxtName>Garasiku</TxtName>
                        <Text>Gunakan fitur garasiku untuk mencari sparepart secara cepat dan lebih akurat</Text>
                    </TextAdd>
                    <TouchableNativeFeedback>
                        <AddVehicle>+ Tambah Kendaraan</AddVehicle>
                    </TouchableNativeFeedback>
                </AddContainer>
            </ScrollView>
        </Container >
    );
};

export default DashboardEmpty;
