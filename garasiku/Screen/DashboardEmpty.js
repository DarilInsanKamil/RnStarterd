import { View, Text, Image, ImageBackground, TouchableNativeFeedback, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
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
    TextAdd,
    SeeAll,
    TxtFeat,
    OtherContainer,
    Others,
    FlatKupon,
    MyVoucher,
    Txtkupon,
    IconLoc
} from '../styled/dashStyled';
import { Datas } from '../Data/Datadash2';
import { DataDash } from '../Data/DataDash';

const DashboardEmpty = () => {
    const [login, seLogin] = useState(true)
    const [add, seAdd] = useState(true)

    let bag, dikirim, money, poin, setting, levelicons, referal, arrow, headeimg, proses, garasiku, arrow2, location, voucher, chevron, jam
    const datas = Datas.map((e) => {
        return (
            referal = e.referals,
            headeimg = e.headerimg,
            arrow = e.arrows,
            arrow2 = e.arrows2,
            poin = e.poins,
            bag = e.bag,
            money = e.money,
            dikirim = e.dikirim,
            setting = e.settings,
            levelicons = e.levelicon,
            proses = e.proses,
            garasiku = e.garasiku,
            voucher = e.vouchers,
            location = e.locations,
            chevron = e.chevrons,
            jam = e.iconjam
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
                                <TouchableNativeFeedback>
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
                            <TxtName color="#0033A0" weight="normal">{login ? "125.000.000" : "25.000"}</TxtName>
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
                    <SeeAll>
                        <TxtName color="#000" size="18px">Riwayat belanja</TxtName>
                        {
                            login ?
                                <TouchableNativeFeedback>
                                    <TxtName color="#0033A0" size="12px">Lihat semua</TxtName>
                                </TouchableNativeFeedback>
                                : null
                        }
                    </SeeAll>

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
                    <SeeAll>
                        <TxtName color="#000" size="18px">Kupon Diskon Saya</TxtName>
                        {
                            login ?
                                <TouchableNativeFeedback>
                                    <TxtName color="#0033A0" size="12px">Lihat semua</TxtName>
                                </TouchableNativeFeedback> : null
                        }
                    </SeeAll>
                    {
                        login ?
                            <FlatList
                                data={DataDash}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => `${item.key}-${index}`}
                                renderItem={({ item }) => (
                                    <FlatKupon>
                                        <Image source={item.image} />
                                        <TxtName color="#000" size="14px" weight="400">{item.title}</TxtName>
                                        <Text>
                                            <Image source={item.jam} />
                                            {item.berlaku}
                                        </Text>
                                    </FlatKupon>
                                )} /> :
                            <EmptyKupon>
                                <TxtName weight="normal" color="#BCBCBC" size="12px">Anda tidak memiliki kupon diskon</TxtName>
                            </EmptyKupon>
                    }

                </KuponContainer>
                <KuponContainer>
                    <SeeAll>
                        <TxtName color="#000" size="18px">E-voucher Service Saya</TxtName>
                        {
                            login ?
                                <TouchableNativeFeedback>
                                    <TxtName color="#0033A0" size="12px">Lihat semua</TxtName>
                                </TouchableNativeFeedback> : null
                        }
                    </SeeAll>
                    {
                        login ?
                            <>
                                <MyVoucher>
                                    <Image source={voucher} />
                                    <View>
                                        <TxtName size="15px" color="#000" weight="500" mbtm="5px">Voucher Spooring + Balancing Shop&Drive</TxtName>
                                        <IconLoc>
                                            <Image source={jam} />
                                            <Txtkupon mleft="5px">Berlaku sampai 21 April 2021, jam 14:00</Txtkupon>
                                        </IconLoc>
                                        <IconLoc mleft="2px">
                                            <Image source={location} />
                                            <Txtkupon mleft="7px">Shop&Drive Hybrida, Jakarta Utara</Txtkupon>
                                        </IconLoc>
                                    </View>
                                    <Image source={chevron} />
                                </MyVoucher>
                                <MyVoucher>
                                    <Image source={voucher} />
                                    <View>
                                        <TxtName size="15px" color="#000" weight="500" mbtm="5px">Voucher Spooring + Balancing Shop&Drive</TxtName>
                                        <IconLoc>
                                            <Image source={jam} />
                                            <Txtkupon mleft="5px">Berlaku sampai 21 April 2021, jam 14:00</Txtkupon>
                                        </IconLoc>
                                        <IconLoc mleft="2px">
                                            <Image source={location} />
                                            <Txtkupon mleft="7px">Shop&Drive Hybrida, Jakarta Utara</Txtkupon>
                                        </IconLoc>
                                    </View>
                                    <Image source={chevron} />
                                </MyVoucher>
                                <MyVoucher>
                                    <Image source={voucher} />
                                    <View>
                                        <TxtName size="15px" color="#000" weight="500" mbtm="5px">Voucher Spooring + Balancing Shop&Drive</TxtName>
                                        <IconLoc>
                                            <Image source={jam} />
                                            <Txtkupon mleft="5px">Berlaku sampai 21 April 2021, jam 14:00</Txtkupon>
                                        </IconLoc>
                                        <IconLoc mleft="2px">
                                            <Image source={location} />
                                            <Txtkupon mleft="7px">Shop&Drive Hybrida, Jakarta Utara</Txtkupon>
                                        </IconLoc>
                                    </View>
                                    <Image source={chevron} />
                                </MyVoucher>

                            </>
                            :
                            <EmptyKupon>
                                <TxtName weight="normal" color="#BCBCBC" size="12px">Anda tidak memiliki e-voucher</TxtName>
                            </EmptyKupon>
                    }
                </KuponContainer>

                {/* Tamabah Kendaraan */}

                <AddContainer source={garasiku}>
                    <TextAdd>
                        <TxtName color="yellow" size="28px">
                            Garasi
                            <TxtName weight="normal" size="28px">ku</TxtName>
                        </TxtName>
                        <TxtFeat>Gunakan fitur garasiku untuk mencari sparepart secara cepat dan lebih akurat</TxtFeat>
                    </TextAdd>
                    <TouchableNativeFeedback>
                        {
                            add ? <AddVehicle bcolor="yellow" color="blue" borders="none">Cari Sekarang</AddVehicle>
                                : <AddVehicle borders="2px dashed #C2D5FF">+ Tambah Kendaraan</AddVehicle>
                        }
                    </TouchableNativeFeedback>
                </AddContainer>
                <OtherContainer>
                    <TouchableNativeFeedback>
                        <Others>
                            <TxtName color="#000" size="14px" weight="600">Lacak Pesanan</TxtName>
                            <Image source={arrow2} />
                        </Others>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <Others>
                            <TxtName color="#000" size="14px" weight="600">Favorit Saya</TxtName>
                            <Image source={arrow2} />
                        </Others>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <Others>
                            <TxtName color="#000" size="14px" weight="600">Perbandingan Produk</TxtName>
                            <Image source={arrow2} />
                        </Others>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <Others>
                            <TxtName color="#000" size="14px" weight="600">Daftar Alamat</TxtName>
                            <Image source={arrow2} />
                        </Others>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <Others>
                            <TxtName color="#000" size="14px" weight="600">Ulasan Produk</TxtName>
                            <Image source={arrow2} />
                        </Others>
                    </TouchableNativeFeedback>
                    {
                        login ?
                            <TouchableNativeFeedback>
                                <Others>
                                    <TxtName color="#000" size="14px" weight="600">Booking Service</TxtName>
                                    <Image source={arrow2} />
                                </Others>
                            </TouchableNativeFeedback> : null                          
                    }

                </OtherContainer>
            </ScrollView>
        </Container >
    );
};

export default DashboardEmpty;
