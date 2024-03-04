import { Inter } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";
// import { Provider } from "react-redux";
// import store from "@/store";
import ReduxProvider from "@/providers/ReduxProvider";
import { UserProvider } from "@/providers/UserProvider";
import NotistackProvider from "@/providers/NotistackProvider";
import WalletContextProvider from "@/providers/WalletProvider";
import HeaderEOA from "@/components/common/HeaderEOA";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import { ContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creso Wallet",
  description: "Creso app",
  manifest: "./manifest.webmanifest ",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <UserProvider>
            <WalletContextProvider>
              {/* <HeaderEOA /> */}
              <NotistackProvider className="">
                <ContextProvider initialState={initialState}>
                  {children}
                </ContextProvider>
              </NotistackProvider>
            </WalletContextProvider>
          </UserProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
