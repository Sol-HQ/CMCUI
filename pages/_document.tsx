import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src='https://terminal.jup.ag/main-v4.js' strategy="beforeInteractive" />
      </Head>
      <body>
        <div id="jupiter-terminal"></div>
        <Script id="jupiter-init" strategy="afterInteractive">
          {`
            window.addEventListener('load', () => {
              if (typeof window.Jupiter !== 'undefined') {
                window.Jupiter.init({
                  displayMode: "widget",
                  endpoint: "https://mainnet.helius-rpc.com/?api-key=6cf235c9-8b64-4e86-bede-fbf0fd688c9f",
                  containerName: "jupiter-terminal",
                  refetchIntervalForTokenAccounts: 10,
                  strictTokenList: false,
                  formProps: {
                    fixedInputMint: true,
                    fixedOutputMint: true,
                    initialAmount: "1000000",
                    initialInputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    initialOutputMint: "So11111111111111111111111111111111111111112",
                  },
                });
              }
            });
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
