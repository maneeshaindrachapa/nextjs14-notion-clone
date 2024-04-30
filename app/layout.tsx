import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "All your notes in one place, wherever you are.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo/logo.svg",
        href: "/logo/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo/logo-dark.svg",
        href: "/logo/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
