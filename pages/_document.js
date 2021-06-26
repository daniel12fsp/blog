import Document, { Html, Head, Main, NextScript } from "next/document";
import fs from "fs";
import { getDarkCssPath } from "../constants";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const darkCssContent =  fs.readFileSync(getDarkCssPath, "utf8")
    // console.log({darkCssContent})
    return { darkCssContent, ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
         <link rel="preconnect" href="https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoC1CzjvmyNL4U.woff2" />
         <link rel="preconnect" href="https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoC1CzjsGyN.woff2" />
          
          <style >{ this.props.darkCssContent } </style>
          {/* TODO: Put this code in good place*/}
          <style dangerouslySetInnerHTML={{__html: `pre[class*=\"language-\"]  {  background: black !important;      border-radius: 15px;
   } `}}> 

          </style>
          
     
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="yandex-verification" content="79a77ec25a16d825" />
	    <meta charSet="utf-8"/>
	    <meta  name="theme-color" content="#20232a" />
	    <meta name="description" content="Dicas e códigos" />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
           <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
            rel="stylesheet"
          /> 
        </body>
      </Html>
    );
  }
}
