/*
Class
Function  > yang paling sering dipakai programmer sekarang
*/
import { Link } from 'react-router';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <button>Submit</button>
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
    </>
  );
}

export default Home;
