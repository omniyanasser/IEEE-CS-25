import { useContext } from 'react';
import { UserContext } from './Context';

type UserType = {
  name: string;
  age: number;
};

function User() {
  const user = useContext(UserContext) as UserType | undefined;
  if (!user) {
    return <div>No user data available.</div>;
  }
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default User
