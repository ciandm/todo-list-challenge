import { useContext } from 'react';
import { useRouter } from 'next/router';
import Nav from '../src/components/Nav';
import TasksContainer from '../src/components/TasksContainer';
import { AuthContext } from '../lib/AuthContext';
import PageLoader from '../src/components/PageLoader';

export default function Home() {
  const { authUser } = useContext(AuthContext);
  const router = useRouter();
  if (!authUser.loading && !authUser.user) {
    router.push('/login');
  }

  return (
    <>
      {authUser.loading ? (
        <PageLoader />
      ) : (
        <>
          <Nav />
          {authUser.user ? <TasksContainer /> : null}
        </>
      )}
    </>
  );
}
