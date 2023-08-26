import Cards from '../../../components/Product/Cards/Cards'
import Navbar from '../../../components/Product/Navbar/Navbar'
import NavItems from '../../../components/Product/Navbar/NavItems'
import style from './style.module.css'

export default function productIndex() {
    return (
        <div className={style.productspage}>
            <Navbar>
                <NavItems
                    link="#"
                    icon="Início"
                />
            </Navbar>

            <div className={style.wrapper}>
                <Cards 
                    img="https://m.media-amazon.com/images/I/415QqZN5DBL._AC_.jpg"
                    nome="Pelúcia Pikachu"
                    descricao="Uma pelúcia do Pikachu usando fantasia do Charizard"
                    quantidade="15"
                    categoria="Pelúcia"
                />
                <Cards 
                    img="https://m.media-amazon.com/images/I/415QqZN5DBL._AC_.jpg"
                    nome="Pelúcia Pikachu"
                    descricao="Uma pelúcia do Pikachu usando fantasia do Charizard"
                    quantidade="15"
                    categoria="Pelúcia"
                />
                <Cards 
                    img="https://m.media-amazon.com/images/I/415QqZN5DBL._AC_.jpg"
                    nome="Pelúcia Pikachu"
                    descricao="Uma pelúcia do Pikachu usando fantasia do Charizard"
                    quantidade="15"
                    categoria="Pelúcia"
                />
                <Cards 
                    img="https://m.media-amazon.com/images/I/415QqZN5DBL._AC_.jpg"
                    nome="Pelúcia Pikachu"
                    descricao="Uma pelúcia do Pikachu usando fantasia do Charizard"
                    quantidade="15"
                    categoria="Pelúcia"
                />
                <Cards 
                    img="https://m.media-amazon.com/images/I/415QqZN5DBL._AC_.jpg"
                    nome="Pelúcia Pikachu"
                    descricao="Uma pelúcia do Pikachu usando fantasia do Charizard"
                    quantidade="15"
                    categoria="Pelúcia"
                />
                <Cards 
                    img="https://m.media-amazon.com/images/I/415QqZN5DBL._AC_.jpg"
                    nome="Pelúcia Pikachu"
                    descricao="Uma pelúcia do Pikachu usando fantasia do Charizard"
                    quantidade="15"
                    categoria="Pelúcia"
                />
            </div>
        </div>
    )
}