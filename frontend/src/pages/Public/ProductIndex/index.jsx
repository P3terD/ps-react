import Cards from '../../../components/Product/Cards/Cards'
import Navbar from '../../../components/Product/Navbar/Navbar'
import NavItems from '../../../components/Product/Navbar/NavItems'
import style from './style.module.css'

import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import BaseApi from '../../../services/Api'
import { useStateContext } from '../../../context/ContextProvider'

import { toast } from 'react-toastify'
import Pagination from '../../../components/Layout/Pagination'

const INITIAL_DATA = {
    total: 0,
    current_page: 1,
    last_page: 1,
    first_page_url: "",
    last_page_url: "",
    next_page_url: "",
    prev_page_url: null,
    path: "",
    from: 1,
    to: 1,
    data: []
};

export default function ProductIndex() {
     let [searchParams, setSearchParams] = useSearchParams();

    let controller = new AbortController();

    const INITIAL_FILTERS = {
        search: searchParams.get("search") || "",
    };

    const INITIAL_QUERY = {
        sort: "id",
        order: "desc",
        per_page: 10,
        page: searchParams.get("page") || 1,
    };

    const [isLoading, setLoading] = React.useState(true);
    const [isFiltering, setFiltering] = React.useState(true);
    const [isPaginating, setPaginating] = React.useState(true);

    const [query, setQuery] = React.useState({
        ...INITIAL_QUERY,
        ...INITIAL_FILTERS,
    });
    const [filters, setFilters] = React.useState({ ...INITIAL_FILTERS });
    const [tableData, setTableData] = React.useState({ ...INITIAL_DATA });
    const [natData, setNatData] = React.useState({ ...INITIAL_DATA });

    const { setNotification } = useStateContext();

    const requestData = (args = {}) => {
        setLoading(true);
        let q = { ...query, ...args };
        BaseApi.get("/produto", {
        signal: controller.signal,
        params: {
            ...q,
            search: q.search !== "" ? q.search : undefined,
        },
        })
        .then((response) => {
            setTableData(response.data);
            setLoading(false);
            setPaginating(false);
            setFiltering(false);
        })
        .catch((err) => {
            if (err) {
            console.log(err);
            toast.error("Erro ao carregar dados da tabela");
            setTableData({ ...INITIAL_DATA });
            setLoading(false);
            setPaginating(false);
            setFiltering(false);
            }
        });
    };

    const requestNatData = () => {
        setLoading(true);
        BaseApi.get("/categoria")
        .then((response) => {
            setNatData(response.data);
            setLoading(false);
            setPaginating(false);
            setFiltering(false);
        })
        .catch((err) => {
            if (err) {
            console.log(err);
            toast.error("Erro ao carregar dados da tabela");
            setNatData({ ...INITIAL_DATA });
            setLoading(false);
            setPaginating(false);
            setFiltering(false);
            }
        });
    };

    const setSearch = (args = {}) => {
        let params = { ...args };
        if (filters.search && filters.search !== "") params.q = filters.search;
        setSearchParams(params);
      };
    
      const handlePagination = (page) => {
        setSearch({ p: page });
        setPaginating(true);
        setQuery({ ...query, page });
      };
    
      const handleFilters = (e) => {
        e.preventDefault();
        setSearch();
        setFiltering(true);
        setQuery({ ...query, ...filters, page: 1 });

      };

    useEffect(() => {
        controller = new AbortController();
        requestData();
        requestNatData()
       
        return () => {
        controller.abort();
        setLoading(true);
        };
    }, [query]);

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
                    <h1>Conheça algumas de nossas marcas parceiras:</h1>
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

                            <input type='checkbox' id='2'/>
                            <label htmlFor='2'>Chaveiro</label> 
                        </div> 
                    </div>

                    {!isLoading && (
                        <>
                            {isFiltering && (
                                <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                                </div>
                            )}
                            {!isFiltering && (
                                <>
                                    <Pagination
                                        onPaginate={handlePagination}
                                        showOnBottom={!isPaginating && tableData.data.length > 0}
                                        showOnTop={tableData.data.length > 0}
                                        paginateData={tableData}
                                    >
                                        
                                        {!isPaginating && (
                                            <div className={style.wrapper}>
                                                {tableData.data.map ((product) => (
                                                    <Cards
                                                        img={product.imagem}
                                                        nome={product.nome}
                                                        descricao={product.descricao}
                                                        quantidade={product.quantidade}
                                                        categoria={product.categoria_id}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {isPaginating && (
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        )}
                                        
                                        {tableData.data.length === 0 && (
                                        <h5 className="text-purple-3 text-center">
                                            Não foram encontrados registros com estes filtros.
                                        </h5>
                                        )}
                                    </Pagination>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}