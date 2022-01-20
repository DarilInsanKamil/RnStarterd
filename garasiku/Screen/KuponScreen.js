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
                                    <Txt inputColor="#A7A7A7" >Berlaku hingga</Txt>
                                    <Txt InputWeight="400">{item.berlaku}</Txt>
                                    <Txt inputColor="#A7A7A7">Minimal transaksi</Txt>
                                    <Txt InputWeight="400">{item.min_transaksi}</Txt>
                                </ExpTrans>
                            </KuponContent>
                            <KodeKupon>
                                <Txt InputWeight="700" inputColor="#0033A0">{item.code}</Txt>
                            </KodeKupon>
                        </ListKupon>
                    </TouchableNativeFeedback>
                )}
            />
        </Container>
    )
}

export default KuponScreen
