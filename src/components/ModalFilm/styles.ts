import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ContainerTitle = styled.SafeAreaView`
  margin: 5%;
  flex-direction: row;
  justify-content: space-between;
`;
export const CloseModal = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.BLACK1};
  `;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  `;