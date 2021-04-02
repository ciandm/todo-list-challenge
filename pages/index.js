import Nav from '../src/components/Nav';
import TasksContainer from '../src/components/TasksContainer';

export default function Home() {
  return (
    <>
      <Nav />
      <TasksContainer />
    </>
  );
}

// export async function getServerSideProps() {
//   const data = false;

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
