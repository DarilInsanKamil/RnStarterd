import React, { useState } from "react";
import { Text, ImageBackground, FlatList, Image } from 'react-native';
import { Container, Textstyle, Log, StatusTotal, Images, Separator, FlatSub, Status, Render,ImageItem } from '../styled/lacakPesananStyled';
import background from '../asset/BACKGROUND.png';
import { MainData } from "../Data/MainData";
const ListRiwayat = () => {
    
    return (
        <Container>
            <FlatList
                data={MainData}
                keyExtractor={(item) => (item.id)}
                renderItem={({ item }) => (
                    <Render>
                        <FlatSub>
                            <Status>
                                <Text>Pesanan <Textstyle weight="700" size="14px">{item.no_pesanan}</Textstyle></Text>
                                <Log bcolor={item.back_color}>
                                    <Textstyle color={item.color} size="11px">{item.pesanan}</Textstyle>
                                </Log>
                            </Status>
                            <Text>{item.tanggal}</Text>
                            <Images>
                                <ImageItem source={item.ban} />
                                <ImageItem source={item.rem} />
                                <ImageItem source={item.filter} />
                                <ImageItem source={item.battery} />
                                <ImageItem source={item.cylinder} />
                                <ImageItem source={item.window} />
                                <ImageItem source={item.aki} />
                                <ImageItem source={item.airfilter} />
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
                )}
            />
        </Container>
    )
}
export default ListRiwayat