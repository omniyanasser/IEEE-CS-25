import { atom, useAtom } from 'jotai';

const ApiAtom = atom(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
});

function ApiComponent() {
  const [users] = useAtom(ApiAtom);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ApiComponent
