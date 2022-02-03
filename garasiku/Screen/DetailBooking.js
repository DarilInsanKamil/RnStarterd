import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import background from '../asset/BACKGROUND2.png';
import { ContainerDetail, ImageDetail, DetailText, Texts, Icontxt, Icons, Rate, Jadwal, Tanggal, Kode, Nokode, Syarat, Test, Exp, Code, Copy, Done } from '../styled/bookingStyled';
import { AirbnbRating } from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DetailBooking = ({ route }) => {
    const [copyClick, setCopyClick] = useState(false)
    const {
        copy,
        title_detail,
        lokasi,
        location,
        tanggal,
        rate,
        booking_detail,
        kode,
        dateicon,
        type1,
        type2,
        type3,
        type4,
        bullet,
        exp,
        jamkuning,
    } = route.params
    return (
        <ContainerDetail>
            <ImageBackground source={background} style={{ paddingBottom: 55 }}>
            </ImageBackground>
            <ScrollView>
                <ImageDetail source={booking_detail} />
                <DetailText>
                    <Texts size="18px" weight="normal">{title_detail}</Texts>
                    <Icontxt>
                        <Icons mr="10px" source={location} />
                        <Texts size="12px" color="rgba(97, 97, 97, 1)" weight="normal">{lokasi}</Texts>
                    </Icontxt>
                    <Rate>
                        <AirbnbRating
                            count={5}
                            defaultRating={rate}
                            size={15}
                            showRating={false}
                            isDisabled={true}
                        />
                        <Texts size="12px" weight="700">{rate}</Texts>
                    </Rate>
                </DetailText>
                <Jadwal>
                    <Tanggal>
                        <Icons source={dateicon} />
                        <Texts size="14px" color="rgba(97, 97, 97, 1)" weight="normal">{tanggal}</Texts>
                    </Tanggal>
                </Jadwal>
                <Syarat>
                    <Texts size="16px" weight="700">Syarat dan Ketentuan</Texts>
                    <Test>
                        <Test>
                            <Texts size="12px" color="rgba(196, 196, 196, 1)">{bullet}</Texts>
                        </Test>
                        <Texts size="14px" weight="400" color="rgba(97, 97, 97, 1)">{type1}</Texts>
                    </Test>
                    <Test>
                        <Test>
                            <Texts size="12px" color="rgba(196, 196, 196, 1)">{bullet}</Texts>
                        </Test>
                        <Texts size="14px" weight="400" color="rgba(97, 97, 97, 1)">{type2}</Texts>
                    </Test>
                    <Test>
                        <Test>
                            <Texts size="12px" color="rgba(196, 196, 196, 1)">{bullet}</Texts>
                        </Test>
                        <Texts size="14px" weight="400" color="rgba(97, 97, 97, 1)">{type3}</Texts>
                    </Test>
                    <Test>
                        <Test>
                            <Texts size="12px" color="rgba(196, 196, 196, 1)">{bullet}</Texts>
                        </Test>
                        <Texts size="14px" weight="400" color="rgba(97, 97, 97, 1)">{type4}</Texts>
                    </Test>
                    <Exp>
                        <Icons source={jamkuning} />
                        <Texts size="14px" weight="400" color="rgba(97, 97, 97, 1)">{exp}</Texts>
                    </Exp>
                </Syarat>
            </ScrollView>
            <Kode>
                <Texts color="#fff" weight="700" size="16px">Kode Booking</Texts>
                <Nokode>
                    <Done>
                        <Texts color="rgba(0, 51, 160, 1)" size="16px" weight="700">Selesai</Texts>
                    </Done>
                    <Code>
                        <Texts color="rgba(0, 51, 160, 1)" size="16px" weight="700">{kode}</Texts>
                    </Code>
                    <Copy>
                        <Ionicons name="copy-outline" size={20} />
                    </Copy>
                </Nokode>
            </Kode>
        </ContainerDetail >
    );
};

export default DetailBooking;
