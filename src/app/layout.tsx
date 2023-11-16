import "./globals.css";
import Providers from "@/providers";
import { IOnlyChildren } from "@/shared/interface/IOnlyChildren";
import AppLayout from "@/components/app-layout";

export default function RootLayout(props: IOnlyChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppLayout>{props.children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
