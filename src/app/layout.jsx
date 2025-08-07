import localFont from "next/font/local";
import "./styles/globals.css";

// Configurar fonte local baixada
const cormorantGaramond = localFont({
    src: [
        {
            path: "../../public/fonts/CormorantGaramond-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/CormorantGaramond-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-CormorantGaramond",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={cormorantGaramond.variable}>
            <body className={cormorantGaramond.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}