import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 4px 0;
  background-color: ${({ theme }) => theme.COLORS.BLACK2};
`;
export const SearchContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 14px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;
export const Input = styled.TextInput`
  width: 85%;
  height: 50px;
  border-radius: 8px;
  padding: 8px 15px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;
export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;