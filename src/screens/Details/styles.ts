import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 4px 0;
  background-color: ${({ theme }) => theme.COLORS.BLACK2};
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;