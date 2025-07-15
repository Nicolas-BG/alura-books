import styled from 'styled-components';
import { Titulo } from '../Titulo'
import { livros } from './dadosUltimosLancamentos.js';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro.png';


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor="#EB9B00" tamanhoFonte="36px">
                ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                imagem={imagemLivro}
            ></CardRecomenda>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;