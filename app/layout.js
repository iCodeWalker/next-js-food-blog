import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  // #### Note ###
  // "children" here is the content of the page active , as the layout is the wrapper around the page
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
