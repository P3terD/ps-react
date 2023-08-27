import Cards from '../../../components/Product/Cards/Cards'
import Navbar from '../../../components/Product/Navbar/Navbar'
import NavItems from '../../../components/Product/Navbar/NavItems'
import style from './style.module.css'

export default function productIndex() {
    return (
        <div className={style.productspage}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
                crossorigin="anonymous" referrerpolicy="no-referrer" 
            />

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