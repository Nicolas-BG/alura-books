import './estilo.css';
import Logo from '../../components/Logo';
import OpcoesHeader from '../../components/OpcoesHeader';
import IconesHeader from '../../components/IconesHeader';

function Header() {

    return (
        <header className="App-header">
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </header>
    );
}

export default Header;