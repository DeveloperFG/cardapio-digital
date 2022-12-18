import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicial from './Pages/Inicial/Inicial'
import Submenu from './Pages/subMenu/Submenu'

// Items
import Hamburguer from './Pages/Pedidos/Hamburgues'
import Pizza from './Pages/Pedidos/Pizza'
import Bebidas from './Pages/Pedidos/Bebidas'
import Promocoes from './Pages/Pedidos/Promocoes'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Inicial} />
                <Route exact path='/Submenu' component={Submenu} />
                <Route exact path='/Hamburguer' component={Hamburguer} />
                <Route exact path='/Pizza' component={Pizza} />
                <Route exact path='/Bebidas' component={Bebidas} />
                <Route exact path='/Promocoes' component={Promocoes} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;