import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  height?: number;
}

function Button({ type = "PRIMARY", title, height, ...rest }: ButtonProps) {
  return (
    <Container
      type={type}
      {...rest}
      height={height}
    >
      <Title type={type}>
        {title}
      </Title>
    </Container>
  );
}

export default Button;