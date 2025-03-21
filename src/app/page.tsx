import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import { Header } from "./_components/Header";
import { Content } from './_components/Content'
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main>
        <SessionProvider>
          <Header />
          <Content />
        </SessionProvider>
      </main>
    </HydrateClient>
  );
}

