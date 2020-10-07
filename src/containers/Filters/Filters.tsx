import React, { useState, useEffect } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";
import styled from "styled-components/native";

import { useStateContext, requests, breakpoints } from "../../utils";

const Container = styled.View`
  justify-content: space-between;
  background: ${({ colors }: any) => colors.background.main};
  flex-direction: row;
  padding: 1rem 5rem;

  ${breakpoints.sm`
    display: block;
    padding: 1rem 2rem;
  `}
`;

const TextInput = styled.TextInput`
  margin-left: 1rem;
  width: 100%;
  font-size: 12px;
  color: ${({ colors }: any) => colors.text.main};
`;

const InputContainer = styled.View`
  background: white;
  flex-direction: row;
  width: 30.555%;
  align-items: center;
  padding-left: 1rem;
  height: 56px;
  background: ${({ colors }: any) => colors.background.alt};

  ${breakpoints.sm`
    width: 100%;
    margin-bottom: 80px;
  `}
`;

const Select = styled(Picker)`
  width: 13.9% !important;
  height: 56px;
  border: 0;
  padding: 19px;
  background: ${({ colors }: any) => colors.background.alt};
  color: ${({ colors }: any) => colors.text.main};

  ${breakpoints.sm`
    width: 48%%;
    margin-bottom: 80px;
  `}
`;

const SearchInput = () => {
  const { colors, setCountries } = useStateContext();
  const [value, onChangeText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [fetching, setFetching] = useState(false);

  const onChange = async (value: string) => {
    onChangeText(value);
    if (!fetching) {
      setFetching(true);
      const countries = await requests.getPartial(value);
      setCountries(countries);
      setFetching(false);
    }
  };
  //a6.jfpen.nl/X1sbesgdozlzbu
  http: return (
    <InputContainer colors={colors}>
      <FontAwesome name="search" size={20} color={colors.text.alt} />
      <TextInput
        colors={colors}
        placeholderTextColor={colors.text.main}
        placeholder="Search for a country"
        onChangeText={onChange}
        value={value}
        style={isFocus && ({ outline: 0 } as any)}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
      />
    </InputContainer>
  );
};

const SearchDropDown = () => {
  const { colors, setCountries } = useStateContext();
  const [selectedValue, setSelectedValue] = useState("0");

  const onRegionChanged = async (value: string | number) => {
    if (value !== "0") {
      setSelectedValue(value as string);
      setCountries(await requests.getByRegion(value as string));
    }
  };

  return (
    <Select
      selectedValue={selectedValue}
      onValueChange={onRegionChanged}
      colors={colors}
    >
      <Select.Item label="Filter By Region" value="0" />
      <Select.Item label="Africa" value="africa" />
      <Select.Item label="America" value="americas" />
      <Select.Item label="Asia" value="asia" />
      <Select.Item label="Europe" value="europe" />
      <Select.Item label="Oceania" value="oceania" />
    </Select>
  );
};

export const Filters = () => {
  const { colors } = useStateContext();
  return (
    <Container colors={colors}>
      <SearchInput />
      <SearchDropDown />
    </Container>
  );
};
