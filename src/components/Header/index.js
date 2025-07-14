//import './estilo.css';
import Logo from '../../components/Logo';
import OpcoesHeader from '../../components/OpcoesHeader';
import IconesHeader from '../../components/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
     background-color: #FFF;
     display: flex;
     justify-content: center;
    li {
     list-style: none;
    }
`


function Header() {

    return (
        //<header className="App-header">...</header>
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </HeaderContainer>
    );
}

export default Header;