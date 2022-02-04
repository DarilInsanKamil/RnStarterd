import React, { useState } from "react";
import { Text, ImageBackground, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Container, Textstyle, Log, StatusTotal, Images, Separator, FlatSub, Status, Render, ImageItem } from '../styled/lacakPesananStyled';
import { MainData } from "../Data/MainData";
const ListRiwayat = ({ navigation }) => {
    return (
        <Container>
            <FlatList
                data={MainData}
                keyExtractor={(item) => (item.id)}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => item.title !== undefined ? navigation.navigate('detailpesanan', {
                        no_pesanan: item.no_pesanan,
                        tanggal: item.tanggal,
                        color_text: item.color_text,
                        jumlah: item.jumlah,
                        pesanan: item.pesanan,
                        platkopling: item.platkopling,
                        mataharikopling: item.mataharikopling,
                        title: item.title,
                        title2: item.title2,
                        harga: item.harga,
                        back_color: item.back_color,
                        harga2: item.harga2,
                        total_harga: item.total_harga,
                        nama: item.alamat.nama,
                        main: item.alamat.main,
                        no_telp: item.alamat.no_telp,
                        email: item.alamat.email,
                        location: item.alamat.location,
                        prov: item.alamat.prov,
                        kab: item.alamat.kab,
                        alamat: item.alamat.alamat,
                        notes: item.alamat.notes,
                        kec: item.alamat.kec,
                    }):null}>
                        <Render>
                            <FlatSub>
                                <Status>
                                    <Text>Pesanan <Textstyle weight="700" size="14px">{item.no_pesanan}</Textstyle></Text>
                                    <Log bcolor={item.back_color}>
                                        <Textstyle color={item.color} size="11px">{item.pesanan}</Textstyle>
                                    </Log>
                                </Status>
                                <Textstyle size="12px">{item.tanggal}</Textstyle>
                                <Images>
                                    <ImageItem source={item.ban} />
                                    <ImageItem source={item.rem} />
                                    <ImageItem source={item.filter} />
                                    <ImageItem source={item.battery} />
                                    <ImageItem source={item.cylinder} />
                                    <ImageItem source={item.window} />
                                    <ImageItem source={item.aki} />
                                    <ImageItem source={item.airfilter} />
                                    <ImageItem source={item.platkopling} />
                                    <ImageItem source={item.mataharikopling} />
                                </Images>
                            </FlatSub>
                            <Separator></Separator>
                            <StatusTotal>
                                {
                                    item.lacak !== undefined ? <Log bord="2px solid #C2D5FF" bcolor={item.lacak_color}>
                                        <Textstyle size="14px" colors={item.color_text} weight="700">{item.lacak}</Textstyle>
                                    </Log> : null
                                }
                                <Text>Total Pesanan <Textstyle size="14px" colors="#0033A0" weight="700">{item.total_harga}</Textstyle></Text>
                            </StatusTotal>
                        </Render>
                    </TouchableWithoutFeedback>
                )}
            />
        </Container>
    )
}
export default ListRiwayat