import React, { FC } from "react";

import { Dimensions } from "react-native";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components/native";

import { useStateContext, breakpoints } from "../../utils";

const Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  background: ${({ colors }: any) => colors.background.main};
  padding-right: 5rem;

  ${breakpoints.sm`
    display: block
    padding-right: calc(100%/7.5);
  `}
` as any;

const CountryContainer = styled.View`
  width: 25%;
  margin-bottom: 72px;
  padding-left: 5rem;

  ${breakpoints.sm`
    width: 100%
    padding-left: calc(100%/7.5);
  `}
`;

const CountrySubContainer = styled.TouchableOpacity`
  background: ${({ colors }: any) => colors.background.alt};
  padding-bottom: 31px;
  max-width: 1440px;
  border-radius: 0.2rem;
`;

const CountryFlag = styled.Image`
  width: 100%;
  height: ${({ flagHeight }: { flagHeight: number }) => flagHeight}px;
  display: block;
  border-radius: 0.2rem 0.2rem 0 0;
`;

const CountryName = styled.Text`
  margin: 0 28px;
  margin-top: 33px;
  margin-bottom: 25px;
  color: ${({ colors }: any) => colors.text.main};
  font-size: 16px;
  font-weight: 800;
`;

const CountryDescription = styled.Text`
  margin: 0 28px;
  margin-bottom: 14px;
  color: ${({ colors }: any) => colors.text.main};
  font-size: 11px;
`;

export const Countries: FC = () => {
  const { countries, colors, navigation } = useStateContext();
  const flagWidth = window.matchMedia("(max-width: 768px)").matches
    ? Dimensions.get("window").width * 0.8
    : (Dimensions.get("window").width * 55) / 3 / 100;
  const flagHeight = flagWidth / 1.64;

  return (
    <Container colors={colors} style={{}}>
      {countries.map(
        ({ name, flag, population, region, capital }: any, key: number) => (
          <CountryContainer colors={colors} key={key}>
            <CountrySubContainer
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }}
              onPress={() =>
                navigation.navigate("Country", { country: encodeURI(name) })
              }
              colors={colors}
            >
              <CountryFlag flagHeight={flagHeight} source={flag} />
              <CountryName colors={colors}>{name}</CountryName>
              <CountryDescription colors={colors}>
                Population: {population}
              </CountryDescription>
              <CountryDescription colors={colors}>
                Region: {region}
              </CountryDescription>
              <CountryDescription colors={colors}>
                Capital: {capital}
              </CountryDescription>
            </CountrySubContainer>
          </CountryContainer>
        )
      )}
    </Container>
  );
};
