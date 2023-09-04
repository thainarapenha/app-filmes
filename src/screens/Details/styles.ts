import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK2};
`;
export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 4%;
  width: 100%;
  padding: 0 5%;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;
export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const ButtonLink = styled.TouchableOpacity`
  z-index: 99;
  width: 64px;
  height: 64px;
  top: 320px;
  left: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.RED};
`;
export const ContanerInfo = styled.View`
  margin: 10% 5% 0 5%;
`;
export const StarsContainer = styled.View`
  margin: 5% 0;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Rate = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const DescriptionFilm = styled.Text`
  margin-top: 3%;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;