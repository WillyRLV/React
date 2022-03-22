import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
    /*Como esto es un componente tenemos que usar return para poder crear las rutas */
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/kk" element={<Home />}/>
            
        </Routes>
        </BrowserRouter>
    )
    }
    export default Router;
    