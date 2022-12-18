import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemContext } from '../../Context/Items'

import './pedidos.css'
import Modal from '../../Components/Modal/Modal'

import { BiArrowBack } from 'react-icons/bi';

import bebidas from './../../img/bebidaas.png'
import cart from '../../img/cart-b.png'
import whats from '../../img/whats.png'



const Bebidas = () => {

    const [isModalVisible, setIsModalVisible] = useState();
    let { lista, setLista, topico, setTopico, total, setTotal } = useContext(ItemContext);


    const Shoops = [
        {
            nome: 'Cajú',
            preco: 8,
            descricao: 'Suco natural de cajú'
        },
        {
            nome: 'Coca-cola',
            preco: 10,
            descricao: 'Beba com moderação'
        },
        {
            nome: 'Cajuina',
            preco: 8,
            descricao: ' Melhor refrigerante '
        },

    ]



    useEffect(() => {

        function loadStorage() {
            const storageUser = localStorage.getItem('burger');

            if (storageUser) {
                setTopico(JSON.parse(storageUser))

            }
        }

        loadStorage()

    }, [])


    function handleList(element) {
        // let select = Produtos.filter((item) => {
        //     return (item.nome === element.nome)
        // })
        let dataItem = {
            id: Math.floor(Math.random() * 100),
            nome: element.nome,
            preco: element.preco,
            descricao: element.descricao
        }

        setLista([...lista, dataItem])
        alert('Adicionado ao carrinho')
    }


    function handleClick() {
        setIsModalVisible(!isModalVisible)
        handleSomar()
    }


    function handleSomar() {
        var somar = lista.reduce(function (accumulator, item) {
            return accumulator + item.preco
        }, 0);

        setTotal(somar)
    }


    function handleExcluir(item) {

        let select = lista.filter((element) => {
            return (element.id != item.id)
        })

        var somar = select.reduce(function (accumulator, item) {
            return accumulator + item.preco
        }, 0);

        setTotal(somar)
        setLista(select)


    }


    function Pagar() {

        if (lista.length == 0) {
            alert(`SEU CARRINHO ESTAR VAZIO EFETUE ALGUMA COMPRA.`)
            return
        } else if (lista.length > 0) {

            window.open(`//api.whatsapp.com/send?phone=+5588992006856&text=%F0%9F%98%80%20%7C%20Ol%C3%A1%20Fsolutions%2C%20Me%20chamo%20Anonymous%0A%0A%F0%9F%93%92%20%7C%20Segue%20lista%20de%20lanches%20que%20desejo%20comprar%0A%0A%F0%9F%9A%80%7C%20Lanches%3A%20%0A%0A${lista.length > 0 ? '• ' + lista[0].nome + '%3A' + '%20' + 'R$' + lista[0].preco + '%0A' : ''}${lista.length > 1 ? '• ' + lista[1].nome + '%3A' + '%20' + 'R$' + lista[1].preco + '%0A' : ''}${lista.length > 2 ? '• ' + lista[2].nome + '%3A' + '%20' + 'R$' + lista[2].preco + '%0A' : ''}${lista.length > 3 ? '• ' + lista[3].nome + '%3A' + '%20' + 'R$' + lista[3].preco + '%0A' : ''}${lista.length > 4 ? '• ' + lista[4].nome + '%3A' + '%20' + 'R$' + lista[4].preco + '%0A' : ''}${lista.length > 5 ? '• ' + lista[5].nome + '%3A' + '%20' + 'R$' + lista[5].preco + '%0A' : ''}${lista.length > 6 ? '• ' + lista[6].nome + '%3A' + '%20' + 'R$' + lista[6].preco + '%0A' : ''}${lista.length > 7 ? '• ' + lista[7].nome + '%3A' + '%20' + 'R$' + lista[7].preco + '%0A' : ''}${lista.length > 8 ? '• ' + lista[8].nome + '%3A' + '%20' + 'R$' + lista[8].preco + '%0A' : ''}${lista.length > 9 ? '• ' + lista[9].nome + '%3A' + '%20' + 'R$' + lista[9].preco + '%0A' : ''}${lista.length > 10 ? '• ' + lista[10].nome + '%3A' + '%20' + 'R$' + lista[10].preco + '%0A' : ''}${lista.length > 11 ? '• ' + lista[11].nome + '%3A' + '%20' + 'R$' + lista[11].preco + '%0A' : ''}${lista.length > 12 ? '• ' + lista[12].nome + '%3A' + '%20' + 'R$' + lista[12].preco + '%0A' : ''}${lista.length > 13 ? '• ' + lista[13].nome + '%3A' + '%20' + 'R$' + lista[13].preco + '%0A' : ''}${lista.length > 14 ? '• ' + lista[14].nome + '%3A' + '%20' + 'R$' + lista[14].preco + '%0A' : ''}%0A%0A%F0%9F%92%B3l%20Total%3A%20${total.toFixed(2)} `)
        }



    }



    return (
        <div className='container'>
            <header>
                <div className='div-completo'>
                    <Link to='/Submenu'> <BiArrowBack size={30} color='white' /></Link>
                    <h1>BEBIDAS</h1>
                    <img className='piz' src={bebidas} />
                </div>
            </header>

            <div className='container-items'>

                {Shoops.map((element, index) => {
                    return (
                        <section key={index} className='items'>

                            <button disabled={topico === '| DELIVERY__' ? false : true} className='topico' onClick={() => handleList(element)}>
                                <h1 >{topico === '| DELIVERY__' ? 'Selecionar' : 'Disponivel'} </h1>
                            </button>
                            <div className='detail'>
                                <div className='detail2'>
                                    <p>{element.nome}</p>
                                    <div className='border'></div>
                                    <div className='detail-preco'>
                                        <small>R$</small>
                                        <p>{(element.preco).toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className='detail-description'>
                                    {element.descricao}
                                </div>

                            </div>

                        </section>
                    )

                })}

            </div>

            <footer className='carrinho'>
                {topico === '| DELIVERY__' ? (
                    <>
                        <div className='cart'>
                            <img src={cart} />
                            <h2 onClick={handleClick}>Seu pedido</h2>
                        </div>
                        <div className='btn'>
                            <button onClick={handleClick}> {lista.length} {lista.length == 0 || lista.length == 1 ? 'item' : 'items'} </button>
                        </div>
                    </>
                ) :
                    <>
                        <div className='cart-delivery'>
                            <h2>AGRADECEMOS A PREFERÊNCIA</h2>
                        </div>
                    </>
                }

            </footer>



            {isModalVisible ? (
                <Modal onClose={() => setIsModalVisible(false)}>
                    <div >
                        {lista.length > 0 ? (
                            <>
                                {/* <p>Meus Items</p> */}
                                {lista.map((item, index) => {
                                    return (
                                        <div className='div-modal'>
                                            <div className='teste' key={index}>
                                                <a>
                                                    <p><strong>Nome: </strong><small>{item.nome}</small> </p>
                                                    <p> <strong>Preço: </strong> <small>  {((item.preco).toFixed(2))}</small> </p>
                                                    <div className='descricao'>
                                                        <p><strong>Descrição: </strong> <small>{item.descricao}</small> </p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className='excluir'>
                                                <button onClick={() => handleExcluir(item)}>--</button>
                                            </div>

                                        </div>

                                    )
                                })}
                                <div>
                                    <small>R$ {total.toFixed(2)}</small>
                                </div>

                                <div className='finalizar-pedido' onClick={Pagar}>
                                    <a>Finalizar pedido</a>
                                    <img src={whats} />
                                </div>
                            </>

                        ) : <h4>Seu carrinho está vazio</h4>}

                    </div>
                </Modal>
            ) : null}

        </div>
    )
}

export default Bebidas