# T3 Stack

This is a fake project, only to improve my usage of the T3 technologies.

## Deploy

Deploy was not implemented yet, but is going to be made through Vercel.

## Notetaker

The name of the "project" (notetaker) was inspired in a tutorial video in Youtube, from Jack Herrington. I appreciate his idea!


## Important
### About useSession

It's required to use SessionProvider component and the parameter 'use client' within the component that uses the session data (the Header)

> src/app/layout.tsx
```
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

    <SessionProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
```