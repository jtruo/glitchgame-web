import Head from "next/head";

type Props = {
    pageTitle: string,
    pageDescription: string,
}

const SEO = ({pageTitle, pageDescription}: Props) => {
    return (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
}

export default SEO;