import { CloseModal, Container, ContainerTitle, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { WebView } from 'react-native-webview';
import theme from "@theme/index";

type TModalFilm = {
  title?: string;
  homepage: string;
  closeModal: () => void;
}

export const ModalFilm: React.FC<TModalFilm> = ({ title, homepage, closeModal }) => {  
  return (
    <Container>
      <ContainerTitle>
        <Title numberOfLines={1}>{title}</Title>
        <CloseModal onPress={() => closeModal()}>
          <Feather name="x" size={24} color={theme.COLORS.WHITE} />
        </CloseModal>
      </ContainerTitle>

      <WebView
        source={{ uri: homepage }}
      />
    </Container>
  );
}