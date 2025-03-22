"use client";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { metadata } from "./metadata";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`antialiased`}>
        <ParallaxProvider>
          {children}
          <Analytics />
        </ParallaxProvider>
      </body>
    </html>
  );
}
