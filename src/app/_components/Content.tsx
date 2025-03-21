'use client';

import { useSession } from "next-auth/react"
import { api } from "~/trpc/react"

export const Content: React.FC = () => {

    const { data: sessionData } = useSession()
  
    const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
      undefined,
      {
        enabled: sessionData?.user !== undefined
      }
    )
  
    return <div>{ JSON.stringify(topics) }</div>
}