import User from '@/app/components/user'
import Users from '@/app/components/users'

import { getTodosByUserId, getUsers } from '@/lib/users'



export default function Page({ params }: { params: { slug?: string[] } }) {
  const { slug } = params

  if (!slug) {
    return <Users />
  }

  return <User slug={slug} />
}