import User from '@/components/User'
import Users from '@/components/Users'

import { getTodosByUserId, getUsers } from '@/lib/users'



export default function Page({ params }: { params: { slug?: string[] } }) {
  const { slug } = params

  if (!slug) {
    return <Users />
  }

  return <User slug={slug} />
}