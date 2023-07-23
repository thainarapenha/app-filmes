import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = {
  type: ButtonTypeStyleProps,
  height?: number,
}

export const Container = styled(TouchableOpacity) <ButtonProps>`
  flex: 1;
  min-height: ${({ height }) => height || 56}px;
  max-height: ${({ height }) => height || 56}px;
  background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.RED : theme.COLORS.WHITE};
  border-radius: 6px;
  border: solid ${({ theme, type }) => theme.COLORS.RED} 1px;
  margin: 5px 0px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text <ButtonProps>`
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.LG}px ;
      font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    color:${({ theme, type }) => type === "SECONDARY" ? theme.COLORS.RED : theme.COLORS.WHITE};
`;