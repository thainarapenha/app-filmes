import styled from "styled-components/native";

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
`;

export const MenuButton = styled.TouchableOpacity`
  height: 70px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-left: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;