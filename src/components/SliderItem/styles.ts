import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 140px;
  padding: 16px 0 16px 16px;
`;
export const BannerItem = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`;
export const Title = styled.Text`
  padding-top: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
`;
export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Rate = styled.Text`
  padding-left: 4px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.SSM};
`;