import { View, Text, TouchableNativeFeedback, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, Button, Textstyle, SubContainer, Log, StatusTotal, Images, Separator, FlatSub, InputText, ButtonLacak, Render, Status, Tooltip } from '../styled/lacakPesananStyled';
import { LacakData } from '../Data/LacakData';

const Item = ({ item, display }) => (

    <Render style={[display]}>
        <FlatSub>
            <Status>
                <Text>Pesanan <Textstyle weight="700" size="14px">{item.id}</Textstyle></Text>
                <Log bcolor="#FFF7C2">
                    <Textstyle color="#665500" size="11px">{item.status}</Textstyle>
                </Log>
            </Status>
            <Text>{item.tanggal}</Text>
            <Images>
                <Image source={item.img1} />
                <Image source={item.img2} />
            </Images>
        </FlatSub>
        <Separator></Separator>
        <StatusTotal>
            <Log bord="2px solid #C2D5FF">
                <Textstyle size="14px" colors="#0033A0" weight="700">Lacak Pesanan</Textstyle>
            </Log>
            <Text>Total Pesanan <Textstyle size="14px" colors="#0033A0" weight="700">{item.total}</Textstyle></Text>
        </StatusTotal>
    </Render>
)

const LacakPesanan = () => {
    const [input, setInput] = useState('')
    let itemId = []
    const res = LacakData.map((a) => (
        itemId.push(a.id)
    ))
    let id1 = itemId[0].toString()
    let id2 = itemId[1].toString()
    useEffect(() => {
        res
    }, [])

    let backgroundColor = itemId[0] != input && itemId[1] != input ? "#BCBCBC" : "#0033A0"
    let tooltip =  itemId[0] != input && itemId[1] != input && input.length >= 10 ? "flex" : "none";

    const renderItem = ({ item }) => {
        const display = item.id.toString() === input ? "flex" : "none"
        // let display2 = item.id.toString() != input ? "flex" : "none";
        return (
            <Item
                item={item}
                display={{ display }}
            />
        )
    }

    return (
        <Container>
            <SubContainer>
                <Tooltip dis={tooltip}>
                    <Text>Pesanan yang anda cari tidak tersedia</Text>
                </Tooltip>
                <Textstyle>Nomor pesanan</Textstyle>
                <InputText keyboardType="numeric" placeholder="Masukan no.resi" value={input} onChangeText={(input) => setInput(input)} />
            </SubContainer>
            <FlatList
                data={LacakData}
                renderItem={renderItem}
                keyExtractor={(item) => (item.id)}
                extraData={input}
            />
            <Button>
                <TouchableNativeFeedback>
                    <ButtonLacak bcolor={backgroundColor}>
                        <Textstyle size="18px" colors="#fff" weight="bold">Lacak Pesanan</Textstyle>
                    </ButtonLacak>
                </TouchableNativeFeedback>
            </Button>
        </Container>
    );
};

export default LacakPesanan;
