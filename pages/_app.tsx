import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from 'sonner';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Toaster
        richColors
        pauseWhenPageIsHidden
        position="bottom-right"
        toastOptions={{
          duration : 4000
        }}
      />
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
