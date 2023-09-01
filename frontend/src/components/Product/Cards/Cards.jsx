import style from './Card.module.css'

export default function Cards(props) {
    return(
        <div className={style.card}>
            <img src={props.img} alt='' className={style.card_img} />
            <div className={style.card_body}>
                <div>
                    <h2 className={style.card_name}>{props.nome}</h2>
                    <p className={style.card_description_quantity}> Descrição: {props.descricao}</p>
                    <p className={style.card_description_quantity}> Quantidade: {props.quantidade}</p>
                    <p className={style.card_category}> Categoria: {props.categoria}</p>
                    <p className={style.card_price}>Preço: {props.preco}</p>
                </div>
                <div className={style.btn_div}>
                    <button className={style.card_btn}>Comprar</button>
                </div>
            </div>
        </div>
    )
}