import { FlatList, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { Container, TidakPesan, Images, NotFound, Texts, TextContent, Box, Icontxt, Icons } from '../styled/bookingStyled';
import date from '../asset/date.png'
import abang from '../asset/abng.png'
import jam from '../asset/jam2.png'
import booking from '../asset/booking1.png'
import booking2 from '../asset/booking2.png'
import bookdetail from '../asset/bookdetail.png'
import location from '../asset/location.png'
import arrow from '../asset/arrow2.png'
import dateicon from '../asset/dateicon.png'
import jamkuning from '../asset/jamkuning.png'
import copy from '../asset/copy.png';
const BookingService = ({ navigation }) => {
    const [pesan, setPesan] = useState(false)
    const [search, setSearch] = useState(false)
    const Data = [
        {
            id: 1,
            title: "Booking Spooring + Balancing Shop&Drive",
            title_detail: "Booking Spooring + Balancing Mobil di Shop&Drive",
            tanggal: "Booking pada tanggal 21 April 2021, jam 14:00",
            lokasi: "Shop&Drive Hybrida, Jakarta Utara",
            jam: jam,
            location: location,
            booking: booking,
            boooking_detail: bookdetail,
            arrow: arrow,
            rate: 4.8,
            kode: "SND045593019",
            dateicon: dateicon,
            sk: {
                type1: 'Booking berlaku 29 hari dari tanggal pembelian',
                type2: "Booking berlaku setiap hari Senin - Jumat, kecuali hari libur nasional.",
                type3: "Silahkan tunjukkan kode booking di bawah kepada petugas"
            },
            bullet: '\u2B24',
            exp: 'Berlaku sampai dengan 30 April 2021',
            copy: copy,
            jamkuning: jamkuning,
        },
        {
            id: 2,
            title: "Booking ganti Aki GS ASTRA MF N50",
            title_detail: "Booking Spooring + Balancing Mobil di Shop&Drive",
            tanggal: "Booking pada tanggal 21 April 2021, jam 14:00",
            lokasi: "Home Servis",
            jam: jam,
            location: location,
            booking: booking2,
            boooking_detail: bookdetail,
            arrow: arrow,
            rate: 4,
            kode: "SND045593019",
            dateicon: dateicon,
            sk: {
                type1: 'Booking berlaku 29 hari dari tanggal pembelian',
                type2: "Booking berlaku setiap hari Senin - Jumat, kecuali hari libur nasional.",
                type3: "Silahkan tunjukkan kode booking di bawah kepada petugas",
                type4: "Silahkan tunjukkan kode booking di bawah kepada petugas"
            },
            bullet: '\u2B24',
            exp: 'Berlaku sampai dengan 30 April 2021',
            copy: copy,
            jamkuning: jamkuning,
        },
    ]

    return (
        <Container>
            {
                pesan ? <TidakPesan>
                    <Images source={date} />
                    <Text>Anda belum memiliki booking</Text>
                </TidakPesan> : null
            }
            {
                search ? <NotFound>
                    <Images source={abang} aself="flex-start" />
                    <TextContent>
                        <Texts numberOfLines={2} size="16px">Booking yang anda cari tidak ditemukan</Texts>
                        <Texts weight="normal">Silakan lakukan pencarian dengan kata lain</Texts>
                    </TextContent>
                </NotFound> : null
            }
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('detailbooking', {
                        title_detail: item.title_detail,
                        tanggal: item.tanggal,
                        lokasi: item.lokasi,
                        location: item.location,
                        jam: item.jam,
                        booking_detail: item.boooking_detail,
                        rate: item.rate,
                        kode: item.kode,
                        type1: item.sk.type1,
                        type2: item.sk.type2,
                        type3: item.sk.type3,
                        type4: item.sk.type4,
                        bullet: item.bullet,
                        dateicon: item.dateicon,
                        exp: item.exp,
                        jamkuning: item.jamkuning,
                        copy: item.copy
                    })}>
                        <Box>
                            <Images source={item.booking} aself="flex-start" />
                            <TextContent>
                                <Texts size="14px">{item.title}</Texts>
                                <TextContent>
                                    <Icontxt>
                                        <Icons source={item.jam} />
                                        <Texts color="#9797">{item.tanggal}</Texts>
                                    </Icontxt>
                                    <Icontxt mleft="1px">
                                        <Icons mr="10px" source={item.location} />
                                        <Texts color="#9797">{item.lokasi}</Texts>
                                    </Icontxt>
                                </TextContent>
                            </TextContent>
                            <Image source={item.arrow} />
                        </Box>
                    </TouchableWithoutFeedback>
                )}
            />
        </Container>
    );
};

export default BookingService;
