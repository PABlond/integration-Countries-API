import React, { FC } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { breakpoints, useStateContext } from "../../utils";

const Container = styled.View`
  background: ${({ colors }) => colors.background.main};
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 5rem;
  padding: 13px 2rem;
  border-radius: 0.4rem;
  background: ${({ colors }) => colors.background.alt};

  ${breakpoints.sm`  
    margin: 5rem 2rem;
  `}
`;

const ButtonText = styled.Text`
  margin-left: 11px;
  color: ${({ colors }) => colors.text.main};
`;

export const BackButton: FC = () => {
  const { colors, navigation } = useStateContext();

  return (
    <Container colors={colors}>
      <Button
        colors={colors}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 4,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="arrowleft" size={24} color={colors.text.main} />
        <ButtonText colors={colors}>Go Back</ButtonText>
      </Button>
    </Container>
  );
};
