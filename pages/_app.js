import "normalize.css/normalize.css"
import "prismjs/themes/prism.css";
import "./styles.css"

import {NavBar} from "../components/Navbar";
import styled from 'styled-components'

const Main = styled.main`
padding: 0 10px;
`

export default function MyApp({ Component, pageProps }) {
	return <div>
		   <NavBar /> 
		<Main>
		<Component {...pageProps} />
		</Main>
</div>

}
