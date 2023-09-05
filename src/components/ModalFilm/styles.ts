import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 8%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.RED};
  `;
export const ContainerTitle = styled.SafeAreaView`
  margin: 5%;
  flex-direction: row;
  justify-content: space-between;
`;
export const CloseModal = styled.TouchableOpacity`
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;