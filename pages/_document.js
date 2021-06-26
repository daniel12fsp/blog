import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/water.css@2.0.0/out/dark.min.css"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="yandex-verification" content="79a77ec25a16d825" />
	    <meta charSet="utf-8"/>
	    <meta  name="theme-color" content="#20232a" />
	    <meta name="description" content="Dicas e códigos" />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
