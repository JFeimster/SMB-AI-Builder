import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMB AI Workflow & Agent Builder | Audit Before You Automate",
  description:
    "Audit one messy SMB workflow, score automation readiness, and build a safe AI agent pilot plan before buying tools or automating broken processes.",
  keywords: [
    "SMB AI workflow automation",
    "AI workflow audit",
    "automation readiness scorecard",
    "AI agent pilot plan",
    "Custom GPT for business automation",
    "small business automation"
  ],
  authors: [{ name: "SMB AI Workflow & Agent Builder" }],
  creator: "SMB AI Workflow & Agent Builder",
  openGraph: {
    title: "SMB AI Workflow & Agent Builder | Audit Before You Automate",
    description:
      "Stop automating broken workflows. Audit one messy process, score readiness, and build a safe AI agent pilot plan.",
    type: "website",
    url: "https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder",
    siteName: "SMB AI Workflow & Agent Builder"
  },
  twitter: {
    card: "summary_large_image",
    title: "SMB AI Workflow & Agent Builder",
    description:
      "Audit one messy SMB workflow and build a safe AI agent pilot plan before you automate."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
