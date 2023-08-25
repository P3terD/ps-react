import style from './Navbar.module.css'

export default function Navbar(props) {
    return(
        <nav className={style.navbar}>
            <ul className={style.navbar_nav}>
                <form className={style.search} onsubmit={props.onsubmit}>
                    <h1 className={style.logo}>GeekStore</h1>
                    <input 
                        type='text'
                        name='query'
                        className={style.search_input}
                        placeholder='Buscar Produto...'
                        value={props.search_input}
                        onChange={props.change}
                    />
                    <button className={style.search_submit} type='submit'>
                        <span class="material-symbols-outlined">
                            Buscar
                        </span>
                    </button>
                </form>

                <div className={style.nav_links}>
                    {props.children}
                </div>

                <li className="style nav_item">
                    <div className="style hamburguer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}