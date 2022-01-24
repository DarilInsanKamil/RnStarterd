import { View, Text, TouchableNativeFeedback } from 'react-native';
import React, { useState } from 'react';
import { Container, Button, Textstyle, SubContainer, InputText, ButtonLacak } from '../styled/lacakPesananStyled';

const LacakPesanan = () => {
    const [input, setInput] = useState('')
    const background = input != '' ? "#0033A0" : "#BCBCBC"
    return (
        <Container>
            <SubContainer>
                <Textstyle>Nomor pesanan</Textstyle>
                <InputText placeholder="Masukan no.resi" value={input} onChangeText={(input) => setInput(input)} />
            </SubContainer>
            <Button>
                <TouchableNativeFeedback>
                    <ButtonLacak bcolor={background}>
                        <Textstyle size="18px" colors="#fff" weight="700">Lacak Pesanan</Textstyle>
                    </ButtonLacak>
                </TouchableNativeFeedback>
            </Button>
        </Container>
    );
};

export default LacakPesanan;
