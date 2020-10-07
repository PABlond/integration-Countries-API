import React from "react";

import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

import { breakpoints, useStateContext } from "../../utils";

const Container = styled.View`
  justify-content: space-between;
  background: ${({ colors }: any) => colors.background.alt};
  flex-direction: row;
  padding: 1rem 5rem;

  ${breakpoints.sm`
    padding: 1rem 2rem;
  `}
`;

const Title = styled.Text`
  font-size: 19px;
  font-weight: 800;
  color: ${({ colors }: any) => colors.text.main};
`;

const ToggleContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DarkModeText = styled.Text`
  color: ${({ colors }: any) => colors.text.main};
  font-size: 12px;
  height: 12px;
  margin-left: 12px;
  font-weight: 600;
`;

export const Header = () => {
  const { colors, darkMode, toggleDarkMode } = useStateContext();

  return (
    <Container colors={colors}>
      <Title colors={colors}>Where in the world?</Title>
      <ToggleContainer onPress={toggleDarkMode}>
        <Feather
          name="moon"
          size={15}
          backgroundColor="#ffffff"
          color={darkMode ? "white" : "black"}
        />
        <DarkModeText colors={colors}>Dark Mode</DarkModeText>
      </ToggleContainer>
    </Container>
  );
};
