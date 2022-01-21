import React from 'react'
import { Image, TouchableNativeFeedback, Text } from 'react-native'
import { Container, Images, Title, DetailsKupon, IconsDetail, Expires, Txt, Sketentuan, ButtonKlaim, TxtSk, Touchable } from '../styled/kuponStyled'

const DetailKupon = ({ route }) => {
    const {
        imagedetail,
        title,
        iconjam,
        iconuang,
        bullet,
        sk,
        berlaku,
        min_transaksi } = route.params
    return (
        <Container inputBackground="#f5f5f5">
            <Images source={imagedetail} />
            <DetailsKupon>
                <Title>{title}</Title>
                <IconsDetail>
                    <Image source={iconjam} />
                    <Expires>
                        <Txt inputColor="#A7A7A7" inputSize="14px">Berlaku hingga</Txt>
                        <Txt inputWeight="400" inputSize="16px">{berlaku}</Txt>
                    </Expires>
                    <Image source={iconuang} />
                    <Expires>
                        <Txt inputColor="#A7A7A7" inputSize="14px">Minimal transaksi</Txt>
                        <Txt inputWeight="400" inputSize="16px">{min_transaksi}</Txt>
                    </Expires>
                </IconsDetail>
            </DetailsKupon>
            <Sketentuan>
                <Txt inputWeight="700" inputSize="20px">Syarat dan Ketentuan</Txt>
                <TxtSk>{sk.type1}</TxtSk>
                <TxtSk>{sk.type2}</TxtSk>
                <TxtSk>{sk.type3}</TxtSk>
            </Sketentuan>
            <Touchable>
                <TouchableNativeFeedback>
                    <ButtonKlaim>
                        <Txt inputColor="#fff" inputSize="18px" inputWeight="bold">Gunakan Kupon Diskon</Txt>
                    </ButtonKlaim>
                </TouchableNativeFeedback>
            </Touchable>
        </Container>
    )
}
export default DetailKupon
