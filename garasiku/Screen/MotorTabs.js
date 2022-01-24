import { View, Text, TouchableNativeFeedback, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, ButtonConteiner, Pick, Button, TextButton, SubContainer, Textlabel } from '../styled/addvechStyled';

const MotorTabs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  return (
    <Container>
      <ScrollView>
        <SubContainer>
          <Textlabel>Merek</Textlabel>
          <Pick>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              } itemStyle={{ backgroundColor: "grey" }}>
              <Picker.Item label="Honda" value="Honda" />
            </Picker>
          </Pick>

          <Textlabel>Model</Textlabel>
          <Pick>
            <Picker>
              <Picker.Item label="City" value="City" />
              <Picker.Item label="Crv" value="Crv" />
              <Picker.Item label="Brio" value="Brio" />
            </Picker>
          </Pick>

          <Textlabel>Generasi</Textlabel>
          <Pick>
            <Picker>
              <Picker.Item label="Gen 5 (2010-2013)" value="Gen 5" />
            </Picker>
          </Pick>

          <Textlabel>Tahun</Textlabel>
          <Pick>
            <Picker>
              <Picker.Item label="2012" value="2012" />
              <Picker.Item label="2015" value="2015" />
              <Picker.Item label="2018" value="2018" />
            </Picker>
          </Pick>

          <Textlabel>Trim</Textlabel>
          <Pick>
            <Picker>
              <Picker.Item label="1500 cc Manual" value="1500 cc Manual" />
            </Picker>
          </Pick>
        </SubContainer>
      </ScrollView>
      <ButtonConteiner>
        <TouchableNativeFeedback>
          <Button bord="2px solid #C2D5FF">
            <TextButton>Hapus</TextButton>
          </Button>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate({
          name: "bottom",
          params: { post: selectedLanguage },
          merge: true,
        })}>
          <Button bcolor="#0033A0">
            <TextButton color="#fff">Simpan</TextButton>
          </Button>
        </TouchableNativeFeedback>
      </ButtonConteiner>
    </Container>
  );
};

export default MotorTabs;
