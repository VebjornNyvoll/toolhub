import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import localFont from "@next/font/local";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { api } from "../utils/api";

import "../styles/globals.css";

const Sofia = localFont({
  src: [
    {
      path: "./../../public/fonts/sofiaPro/SofiaProUltraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProUltraLight-Italic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProExtraLight-Italic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProLight-Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProRegular-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProMedium-Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProSemiBold-Italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProBold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProBlack.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/sofiaPro/SofiaProBlack-Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sofia",
});

const Warming = localFont({
  src: [
    {
      path: "./../../public/fonts/warming/Warming-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/warming/Warming-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/warming/Warming-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/warming/Warming-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../public/fonts/warming/Warming-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sofia",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className={`${Sofia.variable} font-sofia`}>
          <main className={`${Warming.variable} bg-gray-100 font-warming`}>
            <Component {...pageProps} />
          </main>
        </main>
      </LocalizationProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
