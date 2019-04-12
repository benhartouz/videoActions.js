

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate as render } from "react-dom";
import home from "./components/home";
import { Provider } from "react-redux";
import store from "./configureStore/store";
import routes from './routes'
import * as serviceWorker from './serviceWorker';

render(
<Provider store={store}>
<BrowserRouter>
{routes }
</BrowserRouter>
</Provider>,
document.getElementById("root")
);

serviceWorker.unregister();

if (module.hot) {
module.hot.accept();
}
