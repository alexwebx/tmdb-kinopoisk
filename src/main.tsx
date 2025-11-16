
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from "@/app/ui/App/ui/App.tsx";
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "@/app/ui/App/model/store.ts";


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,


)
