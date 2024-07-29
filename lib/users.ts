import { Todo, User } from '@/lib/types'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase'


export async function getUsers(): Promise<{
  users: User[] | null
  error: string | null
}> {
  try {
    
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    const usersData = usersSnapshot.docs.map(doc => doc.data());
    return { users: usersData, error: null };
  } catch (error) {
    return { users: null, error: error.message || 'Failed to fetch users' };
  }
}

export async function getUserById(
  id: string
): Promise<{ user: User | null; error: string | null }> {
  try {
const userDocRef = doc(db, 'users', id);
    const userSnapshot = await getDoc(userDocRef);
    if (userSnapshot.exists()) {
      return { user: userSnapshot.data() as User, error: null };
    } else {
      return { user: null, error: 'User not found' };
    }
  } catch (error: any) {
    return { user: null, error: error.message || 'Failed to fetch user' };
  }
}

export async function getTodosByUserId(
  id: string
): Promise<{ todos: Todo[] | null; error: string | null }> {
  try {
    const todosCollection = collection(db, 'todos'); // Assuming your todos are in a 'todos' collection
    const q = query(todosCollection, where('userId', '==', id)); // Query for todos with matching userId
    const todosSnapshot = await getDocs(q);
    const todosData = todosSnapshot.docs.map(doc => doc.data() as Todo);
    return { todos: todosData, error: null };
  } catch (error: any) {
    return { todos: null, error: error.message || 'Failed to fetch todos' };
  }
}