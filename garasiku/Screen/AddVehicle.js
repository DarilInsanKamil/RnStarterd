import { View, Text, TouchableNativeFeedbackBase, TouchableNativeFeedback, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Data } from '../Data/VehicleData'
import Avanza from '../asset/avanza.png'
import { Container, SubContainer, BorDash, Edit, TextButton, Box, NamaKen, RadioButton, Hole, InputText, SearchVech, Delete, Background } from '../styled/addvechStyled';
import Back from '../asset/back.png';

//Render for Flatlist

const Item = ({ item, onPress, backgroundColor, display }) => (
  <Box onPress={onPress} style={[backgroundColor]}>
    <TouchableNativeFeedback onPress={() => alert('test')}>
      <Delete style={[display]}>
        <TextButton size="10px" color="#fff">X</TextButton>
      </Delete>
    </TouchableNativeFeedback>
    <RadioButton>
      <Hole style={[display]}>
      </Hole>
    </RadioButton>
    <Image source={item.image} />
    <NamaKen>
      <TextButton color="#000" size="16px" weight="bold">{item.title}</TextButton>
      <Text>{item.type}</Text>
    </NamaKen>
    <TouchableNativeFeedback>
      <Edit>
        <TextButton color="#0033A0" size="14px" weight="normal">Ubah</TextButton>
      </Edit>
    </TouchableNativeFeedback>
  </Box>
)

export default function AddVehicle({ navigation }) {
  
  const [add, setAdd] = useState(true)
  const [input, setInput] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const renderItem = ({ item }) => {
    const backgroundColor = item.key === selectedId ? "#FFF7C2" : "#fff";
    const display = item.key === selectedId ? "flex" : "none";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.key)}
        backgroundColor={{ backgroundColor }}
        display={{ display }}
      />
    );
  };

  return (
    <Background source={Back} >
      <SubContainer>
        <TextButton size="14px" color="#fff">Gunakan fitur Garasiku untuk mencari sparepart secara cepat dan lebih hemat</TextButton>
        {
          add ?
            <>
              <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                extraData={selectedId}
              />
              <InputText
                placeholder='Masukan Kata kunci'
                value={input}
                onChangeText={(input) => setInput(input)}
              />
            </> : null
        }


    {/* if user has entered or not*/}

        {
          add ?
            <SearchVech>
              <TouchableNativeFeedback onPress={() => navigation.navigate('top')}>
                <BorDash wide="15%" pad="5px 0px 5px 0px" >
                  <TextButton color="#fff" size="22px">+</TextButton>
                </BorDash>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <BorDash wide="80%" border="none" bcolor="yellow">
                  <TextButton weight="700" size="16px" color="#0033A0">Cari dengan Garasiku</TextButton>
                </BorDash>
              </TouchableNativeFeedback>
            </SearchVech>
            : <TouchableNativeFeedback onPress={() => navigation.navigate('top')}>
              <BorDash>
                <TextButton size="18px" color="#fff">+ Kendaraan</TextButton>
              </BorDash>
            </TouchableNativeFeedback>
        }
      </SubContainer>
    </Background>
  );
}

