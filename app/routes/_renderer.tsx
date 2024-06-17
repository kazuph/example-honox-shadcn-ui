import { Header } from "@/components/Header";
import { reactRenderer } from "@hono/react-renderer";
// import { useRequestContext } from "@hono/react-renderer";
// import { FC, PropsWithChildren } from "react";

// const HasIslands: FC<PropsWithChildren> = ({ children }) => {
//   const IMPORTING_ISLANDS_ID = "__importing_islands" as const;
//   const c = useRequestContext();
//   return <>{c.get(IMPORTING_ISLANDS_ID) ? children : <></>}</>;
// };

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {import.meta.env.PROD ? (
          <>
            {/* <HasIslands> */}
            <script type="module" src="/static/client.js" />
            {/* </HasIslands> */}
            <link href="/static/assets/tailwind.css" rel="stylesheet" />
          </>
        ) : (
          <>
            <script type="module" src="/app/client.ts" />
            <link href="/app/tailwind.css" rel="stylesheet" />
          </>
        )}
        {title ? <title>{title}</title> : ""}
      </head>
      <body>
        <Header />
        <section className="container flex pt-16 grid grid-cols-2 gap-8 xl:grid-cols-4">
          {children}
        </section>
      </body>
    </html>
  );
});
