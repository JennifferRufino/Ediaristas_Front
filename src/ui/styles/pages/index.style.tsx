import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Espaço entre eles */
  gap: ${({ theme }) => theme.spacing(5)};
  /* Limitou mas ficou a esquerda */
  max-width: 650px;
  /* Zero em cima, nas laterais auto(ou seja, mesma margem dos dois lados, o que faz com que o elemento acabe centralizado), a partir do theme a margem embaixo */
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const ProfissionaisContainer = styled("div")`
  display: grid;
  /* forçar a ter uma coluna, sendo assim vai ser pego o que ficar disponível */
  grid-template-columns: 1fr;

  /* Estilização pra quando a tela estiver grande */
  ${({ theme }) => theme.breakpoints.up("md")} {
    /* Cada coluna vai pegar o espaço disponível e dividir igualmente */
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-left: ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
