import "tailwindcss/tailwind.css";
import Head from "next/head";
// shopping cart 
import { CartProvider } from "@/hooks/use-shopping-cart";
import { Header, Footer } from "@/components/index";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-Commerce ex Luke Narke</title>
        <meta
          name="description"
          content="E-commerce store built with Next.js and Stripe checkout by AlterClass.io"
        />
      </Head>

      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
