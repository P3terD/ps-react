import BaseApi from "../../../services/Api";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import React, {useEffect, useState} from "react";
import Tooltip from "../../Popups/Tooltip";
import {Modal, Spinner} from "react-bootstrap";
import Button from "../../Layout/Button";

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

const ModalProduct = ({
    idProduct, onUpdate, onCreate, children
}) => {
    const [isLoading, setLoading] = React.useState(true);
    const [isSaving, setSaving] = React.useState(true);
    const [isShow, setShowModal] = React.useState(false);

    const [setFiltering] = React.useState(true);
    const [setPaginating] = React.useState(true);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [image, setImage] = React.useState(null);
    const [catAPI, setCatAPI] = React.useState({...INITIAL_DATA});
    
    const getCategory = () => {
        BaseApi
        .get("/categoria")
        .then((response) => {
            setCatAPI(response.data);
        })
        .catch((err) => {
            if (err) {
                console.log(err);
                toast.error("Erro ao carregar dados da categoria");
                setCatAPI({ ...INITIAL_DATA });
                setLoading(false);
                setPaginating(false);
                setFiltering(false);
            }
        });
    }

    const buildFormData = () => {
        const formData = new FormData();
        formData.append("nome", name);
        formData.append("descricao", description);
        formData.append("quantidade", quantity);
        formData.append("categoria_id", category);
        if (image) {
            formData.append("imagem", image);
        }
        if (idProduct) {
            formData.append('_method', 'PUT');
        }
        return formData;
    }

    const submitData = (e) => {
        e.preventDefault();
        setSaving(true);
        const formData = buildFormData();

        if(idProduct) {
            BaseApi.post(`/produto/${idProduct}`, formData).then(res => {
                setSaving(false);
                setShowModal(false);
                toast.success("Product updated successfully!");
                onUpdate && onUpdate(res.data);
            }). catch (err => {
                console.log(err);
                Swal.fire('Oops!', err?.data?.errors?.[0] || err?.data?.message || "Ocorreu um erro ao atualizar este produto");
                setSaving(false);
            })
        } 
        else {
            BaseApi.post('/produto', formData
            ).then(res => {
                setSaving(false);
                setShowModal(false);
                toast.success("Product created successfully");
                onCreate && onCreate(res.data);
            }).catch(err => {
                console.log(err);
                Swal.fire('Oops!', err?.data?.errors?.[0] || err?.data?.message || "Ocorreu um erro ao criar este produto");
                setSaving(false);
            })
        }
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleChangeImage = (event) => {
        const selectImage = event.target.files[0];
        setImage(selectImage);
    }

    const requestData = () => {
        setLoading(true);
        BaseApi.get(`/produto${idProduct ? `/${idProduct}` : ''}`).then(res => {
            let data = res.data;
            setName(data.nome);
            setDescription(data.descricao);
            setQuantity(data.quantidade);
            setCategory(data.categoria_id);
            setImage(data.imagem);
            setLoading(false);
            setSaving(false);
        }).catch(err => {
            console.log(err);
            Swal.fire('Oops!', err?.data?.errors?.[0] || err?.data?.message || "Ocorreu um erro ao carregar este lead");
            setShowModal(false);
        })
    }

    useEffect(() => {
        if(isShow) {
            getCategory();
            requestData();
        } else {
            setName('');
            setDescription('');
            setQuantity('');
            setCategory('')
            setImage(null);
            setLoading(true);
            setSaving(true);
        }
    }, [isShow])

    return (
        <>
            {children &&
                React.cloneElement(children, { onClick: (e) => setShowModal(true) })}
            {!children && (
                <Tooltip text={idProduct ? "Edit product" : "Create product"}>
                    <button
                        className={`btn btn-${idProduct ? "warning" : ""} text-white fa-bold`}
                        onClick={(e) => setShowModal(true)}
                    >
                        <i className={`bi bi-${idProduct ? "person-gear" : "plus"}`}></i>
                    </button>
                </Tooltip>
            )}
            <Modal
                centered
                scrollable
                onHide={handleClose}
                show={isShow}
                animation={true}
                size="md"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{idProduct ? "Edit" : "Create"} Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="d-flex align-items-center justify-content-center">
                        {isLoading && (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        )}
                    </div>
                    {!isLoading && (
                        <>
                            <div className="row">
                                <h3 className="font-weight-bold">Product's Information</h3>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Product name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter product name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="description">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        placeholder="Enter description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        placeholder="Enter product's quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="category">Product's Category</label>
                                    <select value={category} name="category" id="category" onChange={(e) => setCategory(e.target.value)} className="form-select">
                                        <option value="" disabled='disabled' selected>Chose the Product's Category</option>
                                        {catAPI.data.map((item) => (
                                            <option value={item.id}>{item.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="image">Product's Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        onChange={handleChangeImage}
                                    />

                                    {
                                        idProduct ? (
                                            <div className="d-flex justify-content-center align-items-center mt-2">
                                                <img 
                                                    scr={image instanceof File ? URL.createObjectURL(image) : image}
                                                    alt="imagem"
                                                    style={{ minWidth: 250, width: 350, objectFit: 'cover' }}
                                                />
                                            </div>
                                        ) :
                                        null
                                    }

                                    {image && !idProduct && (
                                        <div className="d-flex justify-content-center align-items-center mt-2">
                                            {idProduct ? <img src={image} alt="imagem" style={{ minWidth: 250, width: 350, objectFit: 'cover' }} />
                                                : <img src={URL.createObjectURL(image)} alt="imagem" style={{ minWidth: 250, width: 350, objectFit: 'cover' }} />
                                            } 
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </Modal.Body>

                <Modal.Footer>
                    <div className="d-flex align-items-center w-100">
                        <div className="d-block me-auto"></div>
                        <div className="d-block ms-auto">
                        <button
                            className="btn btn-danger text-white me-2"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                        <Button
                            loading={isSaving}
                            onClick={submitData}
                            className="btn btn-success text-white"
                        >
                            {idProduct ? "Update" : "Create"}
                        </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalProduct