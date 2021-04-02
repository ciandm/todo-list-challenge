import { useRouter } from 'next/router';
import { useAuthContext } from '../lib/AuthContext';
import Nav from '../src/components/Nav';
import TasksContainer from '../src/components/TasksContainer';

export default function Home() {
  const { authUser } = useAuthContext();
  const router = useRouter();
  // reroute the user if they're not logged in
  if (!authUser) {
    router.replace('/login');
    return null;
  }

  return (
    <>
      <Nav />
      <TasksContainer />
    </>
  );
}

// export async function getServerSideProps() {

//   if (!data) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
