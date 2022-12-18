import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ItemContext } from '../../Context/Items';

import '../../App.css';

import { FaWhatsapp, FaInstagram, FaFacebookSquare, FaClipboardList, FaShippingFast } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';



import menu from '../../img/menu.png'
import burger from '../../img/burger.png'

function Inicial() {


    let { topico, setTopico } = useContext(ItemContext)


    function handleMenu(event) {
        let clicado = event.target.innerText
        setTopico(clicado)

        localStorage.setItem('burger', JSON.stringify(clicado))
    }



    return (
        <div >
            <img src={menu} />

            <div>
                <img src={burger} />
            </div>

            <section className='sub-menu'>

                <Link to='/subMenu' className='sub-menu-cardapio'>
                    <FaClipboardList size={45} className='icon2' color='#fff' />
                    <h1 onClick={handleMenu}> | CARDÁPIO_</h1>
                </Link>

                <a href="https://wa.me/5588992006856?text=Olá%20estou%20interessado%20em%20seus%20serviços" target="_blank" className='sub-menu-whats'>
                    <FaWhatsapp size={45} className='icon' />
                    <h1>| WHATSAPP</h1>
                </a>

                <Link to='/subMenu' className='sub-menu-whats'>
                    <FaShippingFast size={45} className='icon' />
                    <h1 onClick={handleMenu} >| DELIVERY__</h1>
                </Link>

                <div className='sub-menu-redes'>
                    <a href="https://www.instagram.com/f.fsolutions/" target='blank' className='icon2'><FaWhatsapp size={28} /></a>
                    <a href="https://www.instagram.com/f.fsolutions/" target='blank' className='icon2'><FaInstagram size={28} /></a>
                    <a href="https://www.fsolutions.online/" target='blank' className='icon2'><SiTelegram size={28} /></a>
                    <a href="https://www.facebook.com/Solutions/" target='blank' className='icon2'><FaFacebookSquare size={28} /></a>
                </div>
                <small>Clique para interagir</small>
            </section>

        </div>
    );
}

export default Inicial;
