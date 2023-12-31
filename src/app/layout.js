import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import { Jost } from "next/font/google";
import { ServiceContextProvider } from "./data/ServiceContextProvider";
import { MobileObserverContextProvider } from "./data/MobileObserverContextProvider";
import { SetServicePageIndexContextProvider } from "./data/setServicePageIndex";
import { initLinkedInPixel } from "../../public/scripts/pixelScript.js";
import { initLinkedPixel2 } from "../../public/scripts/googleTag.js";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Simbiose Ventures",
  description: "Simbiose Ventures",
};

initLinkedInPixel();
initLinkedPixel2();

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>{metadata.title}</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={jost.className}>
        <MobileObserverContextProvider>
          <SetServicePageIndexContextProvider>
            <ServiceContextProvider>{children}</ServiceContextProvider>
          </SetServicePageIndexContextProvider>
        </MobileObserverContextProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L1VDPRBXQQ%22%3E"
        async
      ></Script>
    </html>
  );
}
