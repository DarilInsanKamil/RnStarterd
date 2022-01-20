import React from 'react'
import { View, Text, FlatList, Image, TouchableNativeFeedback } from 'react-native'
import { Container, ListKupon, KodeKupon, Txt, Icons, ExpTrans, KuponContent } from '../styled/kuponStyled'
import { Data } from '../Data/Data'

const KuponScreen = ({ navigation }) => {
    return (
        <Container>
            <FlatList
                data={Data}
                keyExtractor={(item, index) => `${item.key}-${index}`}
                renderItem={({ item }) => (
                    <TouchableNativeFeedback onPress={() => navigation.navigate('detailkupon', {
                        image: item.image,
                        imagedetail: item.imagedetail,
                        title: item.title,
                        iconjam: item.iconjam,
                        iconuang: item.iconuang,
                        code: item.code,
                        bullet: item.bullet,
                        sk: item.sk,
                        berlaku: item.berlaku,
                        min_transaksi: item.min_transaksi
                    })}>
                        <ListKupon>
                            <KuponContent>
                                <Image source={item.image} />
                                <Icons>
                                    <Image source={item.iconjam} />
                                    <Image source={item.iconuang} />
                                </Icons>
                                <ExpTrans>
                                    <Txt inputColor="#A7A7A7" inputWeight="normal">Berlaku hingga</Txt>
                                    <Txt inputWeight="400" >{item.berlaku}</Txt>
                                    <Txt inputColor="#A7A7A7" inputWeight="normal">Minimal transaksi</Txt>
                                    <Txt inputWeight="400">{item.min_transaksi}</Txt>
                                </ExpTrans>
                            </KuponContent>
                            <KodeKupon>
                                <Txt inputWeight="700" inputColor="#0033A0">{item.code}</Txt>
                            </KodeKupon>
                        </ListKupon>
                    </TouchableNativeFeedback>
                )}
            />
        </Container>
    )
}

export default KuponScreen
