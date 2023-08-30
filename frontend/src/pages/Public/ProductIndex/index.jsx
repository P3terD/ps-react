import Cards from '../../../components/Product/Cards/Cards'
import Navbar from '../../../components/Product/Navbar/Navbar'
import NavItems from '../../../components/Product/Navbar/NavItems'
import style from './style.module.css'
import { useRef } from 'react'

export default function ProductIndex() {
    let current_item = 0;
    const items = [
        "https://c4.wallpaperflare.com/wallpaper/999/730/463/yellow-fiction-cap-pikachu-detective-hd-wallpaper-preview.jpg",
        "https://m.media-amazon.com/images/I/81XP0ETndkL.jpg",
        "https://images5.alphacoders.com/129/1299476.png"
    ];
    const maxItems = items.length - 1;

    const leftArrow = useRef();
    const rightArrow = useRef();
    const refImg = useRef();

    const handleChangeImage = (leftArrow) => {
        const isLeft = (leftArrow.currentTarget.className == "style_arrow_left__qvSNH");

        if (isLeft) {
            current_item -= 1;
        } else {
            current_item += 1;
        }

        if (current_item > maxItems) {
            current_item = 0;
        }

        if (current_item < 0) {
            current_item = maxItems;
        }

        refImg.current.src = items[current_item]
    };

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
                    <div className={style.gallery_wrapper}>
                        <div className={style.gallery}>
                            <button className={style.arrow_left} onClick={handleChangeImage} ref={leftArrow}>◄</button>
                            <button className={style.arrow_right} onClick={handleChangeImage} ref={rightArrow}>►</button>
                            <img src={items[current_item]} alt='slider image' className={style.slider_item} ref={refImg} />
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