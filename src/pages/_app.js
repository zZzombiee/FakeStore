import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartProvider } from "../components/provider";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
