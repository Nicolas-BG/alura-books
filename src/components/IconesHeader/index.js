import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from 'styled-components';

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`

const icones = [perfil, sacola];

function IconesHeader() {

    return (
        <IconesContainer>
            {icones.map((icone) => (
                <Icone className="icone"><img src={icone} alt='erro'></img></Icone>
            ))}
        </IconesContainer>
    );
}

export default IconesHeader;