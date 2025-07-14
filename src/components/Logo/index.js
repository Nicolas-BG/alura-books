import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
li {
  list-style: none;
}
`
const LogoImg = styled.img`
  .logo-img{
    margin-right: 10px;
  }
`

function Logo() {

  return (
    <LogoContainer>
      <LogoImg src={logo} alt='logo'/>
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  );
}

export default Logo;