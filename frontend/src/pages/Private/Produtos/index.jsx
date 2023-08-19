import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.css";

import BaseApi from "../../../services/Api";
import { useStateContext } from "../../../context/ContextProvider";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { findIndex } from "lodash";
import Pagination from "../../../components/Layout/Pagination";
import { Spinner } from "react-bootstrap";
import TableContainer from "../../../components/Layout/TableContainer";

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
  data: [],
};

export default function Produtos() {
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

    const requestData = (args = {}) => {
        setLoading(true);
        let q = { ...query, ...args };
        BaseApi.get("/produtos", {
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

    const handleCreateProduct = () => {
        setLoading(true);
        setFilters({...INITIAL_FILTERS});
        setQuery({...INITIAL_QUERY})
    };

    const handleUpdateProduct = (product) => {
        let data = [...tableData.data];
        let toUpdate = findIndex(data, {id: product.id});
        if (toUpdate === -1) return;
        data[toUpdate] = {...data[toUpdate],...product};
        setTableData({...tableData, data:data});
    };

    const onDelete = (product) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(({ isConfirmed }) => {
          if (isConfirmed) {
            setLoading(true);
            BaseApi.delete(`/produtos/${product.id}`)
              .then(res => {
                toast.success('Product deleted successfully!');
                requestData();
              })
              .catch(err => {
                Swal.fire('Oops!', err?.data?.errors?.[0] || err?.data?.message || 'Ocorreu um erro ao deletar este produto.', 'error');
                setLoading(false);
              }).finally(() => setLoading(false));
            }
        });
    };

    useEffect(() => {
        controller = new AbortController();
        requestData();

        return () => {
          controller.abort();
          setLoading(true);
        };
    }, [query]);

    return (
        <>
            <div className="d-flex flex-column">
                <div className={"d-flex flex-column flex-md-row pb-4"}>
                    <div className={`${styles.product} col-12 col-md-4 mb-2`}>
                        <h1>Produtos</h1>
                    </div>
                </div>
            </div>
        </>
    )
}