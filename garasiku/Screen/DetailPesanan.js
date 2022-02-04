import React, { useState } from 'react'
import background from '../asset/BACKGROUND.png';
import { Text, ImageBackground, Image, ScrollView, View } from 'react-native'
import { Container, Header, Textstyle, Purchase, Images, Detail, Imagestyle, Address, Icons, Button, Poin } from '../styled/detailpesananStyled';
import pembayaran from '../asset/pembayaran.png'
import proses from '../asset/diproses.png'
import dikirim from '../asset/dikirim2.png';
import dikemas from '../asset/dikemas.png';
import done from '../asset/done.png';
const Detailpesanan = ({ route }) => {
    const {
        no_pesanan,
        tanggal,
        color_text,
        jumlah,
        pesanan,
        platkopling,
        mataharikopling,
        title,
        title2,
        harga,
        back_color,
        harga2,
        total_harga,
        nama,
        main,
        no_telp,
        email,
        location,
        prov,
        kab,
        alamat,
        notes,
        kec,
    } = route.params
    return (
        <>
            <ImageBackground source={background} style={{ paddingBottom: 55 }}>
            </ImageBackground>
            <ScrollView>
                <Container>
                    <Header bc="#FFF7C2" pad="15px">
                        {/* Text */}

                        {
                            pesanan.toLowerCase() == 'belum dibayar' ?
                                <View>
                                    <Textstyle size="14px" color="rgba(49, 49, 49, 1)">Lakukan pembayaran</Textstyle>
                                    <Textstyle>Silakan melakukan pembayaran ke Astraotoshop.com</Textstyle>
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'diproses' ?
                                <View>
                                    <Textstyle size="14px" color="rgba(49, 49, 49, 1)">Pesanan diproses</Textstyle>
                                    <Textstyle>Pesanan sedang diproses oleh Astraotoshop.com</Textstyle>
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'dikemas' ?
                                <View>
                                    <Textstyle size="14px" color="rgba(49, 49, 49, 1)">Pesanan dikemas</Textstyle>
                                    <Textstyle>Pesanan Anda sedang dikemas oleh Astraotoshop.com</Textstyle>
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'dikirim' ?
                                <View>
                                    <Textstyle size="14px" color="rgba(49, 49, 49, 1)">Pesanan dikirim</Textstyle>
                                    <Textstyle>Pesanan Anda sedang dikirim oleh kurir</Textstyle>
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'selesai' ?
                                <View>
                                    <Textstyle size="14px" color="rgba(49, 49, 49, 1)">Pesanan Selesai</Textstyle>
                                    <Textstyle>Terima kasih sudah berbelanja di AstraOtoshop</Textstyle>
                                </View> : null
                        }

                        {/* Icon */}

                        {
                            pesanan.toLowerCase() == 'belum dibayar' ?
                                <View>
                                    <Image source={pembayaran} />
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'diproses' ?
                                <View>
                                    <Image source={proses} />
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'dikemas' ?
                                <View>
                                    <Image source={dikemas} />
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'dikirim' ?
                                <View>
                                    <Image source={dikirim} />
                                </View> : null
                        }
                        {
                            pesanan.toLowerCase() == 'selesai' ?
                                <View>
                                    <Image source={done} />
                                </View> : null
                        }
                    </Header>
                    <Purchase mtop="0px" pad="5px 0px 5px 0px">
                        <Header>
                            <Textstyle>Nomor Pesanan</Textstyle>
                            <Textstyle weight="700">{no_pesanan}</Textstyle>
                        </Header>
                        <Header>
                            <Textstyle>Tanggal Pembelian</Textstyle>
                            <Textstyle>{tanggal}</Textstyle>
                        </Header>
                    </Purchase>
                    <Purchase>
                        <Textstyle weight="700" size="18px">Detail Pesanan</Textstyle>
                        <Images>
                            <Imagestyle>
                                <Image source={platkopling} />
                            </Imagestyle>
                            <Detail>
                                <Textstyle numberOfLines={2} size="14px">{title}</Textstyle>
                                <Textstyle>{jumlah}</Textstyle>
                                <Textstyle weight="700" size="14px">{harga}</Textstyle>
                            </Detail>
                        </Images>
                        <Images>
                            <Imagestyle>
                                <Image source={mataharikopling} />
                            </Imagestyle>
                            <Detail>
                                <Textstyle numberOfLines={2} size="14px">{title2}</Textstyle>
                                <Textstyle>{jumlah}</Textstyle>
                                <Textstyle weight="700" size="14px">{harga2}</Textstyle>
                            </Detail>
                        </Images>
                    </Purchase>
                    <Purchase>
                        <Detail>
                            <Textstyle size="10px">{main}</Textstyle>
                            <Textstyle color="rgba(49, 49, 49, 1)">{nama}</Textstyle>
                            <Textstyle>{no_telp}</Textstyle>
                            <Textstyle>{email}</Textstyle>
                            <Address>
                                <Icons source={location} />
                                <Detail>
                                    <Textstyle>{prov}</Textstyle>
                                    <Textstyle>{kab}</Textstyle>
                                    <Textstyle>{nama}</Textstyle>
                                    <Textstyle>{kec}</Textstyle>
                                    <Textstyle>{alamat}</Textstyle>
                                    <Textstyle size="10px">Catatan : {notes}</Textstyle>
                                </Detail>
                            </Address>
                        </Detail>
                    </Purchase>
                    <Purchase mtop="2px">
                        <Header pad="0px">
                            <Textstyle weight="700" size="14px">Metode Pengiriman</Textstyle>
                            {
                                pesanan.toLowerCase() == 'belum diabayar' ? null :
                                    <Button bord="2px solid rgba(194, 213, 255, 1)" pad="2px 5px 2px 5px" bc="transparent">
                                        <Textstyle weight="700" color="rgba(0, 51, 160, 1)">Lacak Pesanan</Textstyle>
                                    </Button>
                            }

                        </Header>
                        <Textstyle>JNE OKE</Textstyle>
                        <Textstyle>Estimasi tiba 02 Oktober 2021 - 04 Oktober 2021</Textstyle>
                    </Purchase>
                    <Purchase pad="5px 0px 5px 0px">
                        <Header>
                            <Textstyle>Subtotal</Textstyle>
                            <Textstyle>{total_harga}</Textstyle>
                        </Header>
                        <Header>
                            <Textstyle>Penggunaan point</Textstyle>
                            <Textstyle>-10.000</Textstyle>
                        </Header>
                        <Header>
                            <Textstyle>September XTRA</Textstyle>
                            <Textstyle>50.000</Textstyle>
                        </Header>
                        <Header>
                            <Textstyle>Biaya Pengiriman</Textstyle>
                            <Textstyle>54.000</Textstyle>
                        </Header>
                        <Header>
                            <Textstyle>Asuransi Pengiriman</Textstyle>
                            <Textstyle>8.500</Textstyle>
                        </Header>
                        <Header>
                            <Textstyle>Diskon Asuransi Pengiriman</Textstyle>
                            <Textstyle>-8.500</Textstyle>
                        </Header>
                        <Header>
                            <Textstyle weight="700" color="rgba(0, 51, 160, 1)" size="14px">Grand Total</Textstyle>
                            <Textstyle weight="700" color="rgba(0, 51, 160, 1)" size="14px">Rp.602.950</Textstyle>
                        </Header>
                    </Purchase>
                    {
                        pesanan.toLowerCase() == 'belum diabayar' ? null :
                            <Purchase mtop="2px">
                                <Textstyle weight="700" size="14px">Metode Pembayaran</Textstyle>
                                <Textstyle>Menggunakan Mandiri VA sebagai alat pembayaran</Textstyle>
                                <Button>
                                    <Textstyle weight="700" size="14px" color="#fff">Batalkan Pesanan</Textstyle>
                                </Button>
                            </Purchase>
                    }

                    <Poin>
                        <Textstyle>Anda akan mendapatkan 25.000 Poin belanja dari transaksi ini</Textstyle>
                    </Poin>
                    {
                        pesanan.toLowerCase() == 'belum diabayar' ? null :
                            <Purchase bc="rgba(0, 51, 160, 1)" mtop="0px" style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Header bc="transparent" pad="0px">
                                    <Textstyle weight="700" size="14px" color="#fff">Nomor Virtual Account</Textstyle>
                                    <Button pad="2px 5px 2px 5px" mtop="0px">
                                        <Textstyle color="#fff">14 jam 31 menit 28 detik</Textstyle>
                                    </Button>
                                </Header>
                                <Button bc="#fff">
                                    <Textstyle color="rgba(0, 51, 160, 1)" weight="700" size="14px">700140000090897XX</Textstyle>
                                </Button>
                            </Purchase>
                    }
                </Container>
            </ScrollView>
        </>
    )
}
export default Detailpesanan