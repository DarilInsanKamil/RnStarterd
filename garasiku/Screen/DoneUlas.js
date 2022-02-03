import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Container, Images, RenderDone, ImagesContent, ItemRate, Textstyle, TxtDone, TextContent } from '../styled/UlasStyled';
import paket from '../asset/paket.png';
import { AirbnbRating } from 'react-native-ratings';
const Datas = [
  {
    key: 1,
    title: 'PIRELLI Angel City 140/70-17M/ 665(Belakang)',
    tanggal: "22 Mei 2021",
    comment: 'Barang diterima dengan baik, maju terus Astrashop.com',
    img: paket
  },
  {
    key: 2,
    title: 'PIRELLI Angel City 140/70-17M/ 665(Belakang)',
    tanggal: "22 Mei 2021",
    comment: 'Barang diterima dengan baik, maju terus Astrashop.com',
  },
  {
    key: 3,
    title: 'PIRELLI Angel City 140/70-17M/ 665(Belakang)',
    tanggal: "22 Mei 2021",
    comment: 'Barang diterima dengan baik, maju terus Astrashop.com',
  },
]
const DoneUlas = () => {
  return (
    <Container>
      <FlatList
        data={Datas}
        keyExtractor={(item) => (item.key)}
        renderItem={({ item }) => (
          <RenderDone>
            <TxtDone>
              <Textstyle color="#464646" weight="700" numberOfLines={2} style={{ maxWidth: '80%' }}>{item.title}</Textstyle>
              <ItemRate>
                <Textstyle size="12px" color="#A7A7A7">{item.tanggal}</Textstyle>
                <AirbnbRating
                  count={5}
                  defaultRating={4}
                  size={15}
                  showRating={false}
                  isDisabled={true}
                />
              </ItemRate>
            </TxtDone>
            <Textstyle color="#313131">{item.comment}</Textstyle>
            <ImagesContent>
              <Images source={item.img} />
              <Images source={item.img} />
            </ImagesContent>
          </RenderDone>
        )}
      />
    </Container >
  );
};

export default DoneUlas;
