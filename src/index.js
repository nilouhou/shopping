import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "../src/contexts/user.context";
import { ProductProvier } from "./contexts/products.contect";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductProvier>
					<App />
				</ProductProvier>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
