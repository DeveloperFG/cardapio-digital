import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ItemContext } from '../../Context/Items';

import { BiArrowBack } from 'react-icons/bi';

import './submenu.css';

import burguerM from '../../img/burguer-menu.png'
import whats from '../../img/whats.png'

import hamburguer from '../../img/hamburguer.png'
import pizza from '../../img/pizza.png'
import porcoes from '../../img/porcoes.png'
import omeletes from '../../img/omelete.png'
import macarrao from '../../img/macarrao.png'
import bebidas from '../../img/bebidas.png'
import combos from '../../img/combo.png'
import promocoes from '../../img/promocao.png'


function Submenu() {


    let { topico, setTopico } = useContext(ItemContext)


    useEffect(() => {

        function loadStorage() {
            const storageUser = localStorage.getItem('burger');

            if (storageUser) {
                setTopico(JSON.parse(storageUser))

            }
        }

        loadStorage()

    }, [])



    return (
        <div className="App">
            <div className='acabamento'>
                <Link to='/' className='iconImg'>
                    <BiArrowBack size={30} color='white' />
                </Link>
                <div className='imgIcon'>
                    <img src={burguerM} />
                </div>
            </div>

            <div className='tituloSmall'>
                <small >{topico === '| DELIVERY__' ? 'DELIVERY' : 'CARDÁPIO'}</small>
            </div>


            {/* <div className='divisoria' ></div> */}

            <section className='sub-menu2'>

                <Link to='/Hamburguer' className='sub-menu-whats3' >
                    <div className='sub-menu-items'>
                        <img src={hamburguer} className='icon2' />
                    </div>
                    <div>
                        <h1> | HAMBURGUER</h1>
                    </div>
                </Link>

                <Link to='/Pizza' className='sub-menu-whats3'>
                    <div className='sub-menu-items'>
                        <img src={pizza} className='icon2' />
                    </div>
                    <h1> | PIZZAS</h1>
                </Link>

                <Link className='sub-menu-whats2'>
                    <div className='sub-menu-items'>
                        <img src={porcoes} className='icon2' />
                    </div>
                    <h1> | PORÇÕES</h1>
                </Link>

                <Link className='sub-menu-whats2'>
                    <div className='sub-menu-items'>
                        <img src={omeletes} className='icon2' />
                    </div>
                    <h1> | OMELETES</h1>
                </Link>

                <Link className='sub-menu-whats2'>
                    <div className='sub-menu-items'>
                        <img src={macarrao} className='icon2' />
                    </div>
                    <h1> | MACARRÃO</h1>
                </Link>

                <Link to='/Bebidas' className='sub-menu-whats3'>
                    <div className='sub-menu-items'>
                        <img src={bebidas} className='icon2' />
                    </div>
                    <h1> | BEBIDAS</h1>
                </Link>

                <Link className='sub-menu-whats2'>
                    <div className='sub-menu-items'>
                        <img src={combos} className='icon2' />
                    </div>
                    <h1> | COMBOS </h1>
                </Link>

                <Link to='/Promocoes' className='sub-menu-whats3'>
                    <div className='sub-menu-items'>
                        <img src={promocoes} className='icon2' />
                    </div>
                    <h1> | PROMOÇÕES </h1>
                </Link>

            </section>

            <footer className='sub-menu-redes2'>
                <a href="https://wa.me/5588992006856?text=Olá%20estou%20interessado%20em%20seus%20serviços" target="_blank">FALE CONOSCO</a>
                <img src={whats} />
            </footer>

        </div>
    );
}

export default Submenu;
