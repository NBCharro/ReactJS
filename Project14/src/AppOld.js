import { Route, Switch, Redirect } from 'react-router-dom';
import Wellcome from './pages/Wellcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/wellcome" />
                    </Route>
                    <Route path="/wellcome" exact>
                        <Wellcome />
                    </Route>
                    <Route path="/products" exact>
                        <Products />
                    </Route>
                    <Route path="/products/:productId" exact>
                        <ProductDetail />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
