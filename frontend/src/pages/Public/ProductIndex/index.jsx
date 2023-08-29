import Cards from '../../../components/Product/Cards/Cards'
import Navbar from '../../../components/Product/Navbar/Navbar'
import NavItems from '../../../components/Product/Navbar/NavItems'
import style from './style.module.css'

export default function productIndex() {
    const controls = document.querySelectorAll('.control');
    let current_item = 0;
    

    return (
        <div className={style.productspage}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
                crossorigin="anonymous" referrerpolicy="no-referrer" 
            />

            <Navbar>
                <NavItems
                    link="#"
                    icon=<i className="fa-regular fa-moon darkmode"></i>
                />
            </Navbar>

            <div className={style.shoppingPage}>
                <div className={style.slider}>
                    <button className={style.arrow_left}>◄</button>
                    <button className={style.arrow_right}>►</button>
                    <div className={style.gallery_wrapper}>
                        <div className={style.gallery}>
                            <img src='https://c4.wallpaperflare.com/wallpaper/999/730/463/yellow-fiction-cap-pikachu-detective-hd-wallpaper-preview.jpg' alt='pokemon images' className={style.current_item} />
                            <img src='https://m.media-amazon.com/images/I/81XP0ETndkL.jpg' alt='joker image' className={style.slider_item} />
                            <img src='https://images5.alphacoders.com/129/1299476.png' alt='harry potter image' className={style.slider_item} />
                        </div>
                    </div>
                </div>

                <div className={style.shoppingSection}>
                    <div className={style.big_categories}>
                        <h1>Categorias</h1>
                        
                        <div className={style.input_category}>
                        <input type='checkbox' id='1'/>
                        <label htmlFor='1'>Pelúcias</label>  
                        </div> 
                    </div>

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
            </div>
        </div>
    )
}