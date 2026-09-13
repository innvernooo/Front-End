import style from './index.module.css';
import { Link } from 'react-router';

export default function ProfilePage() {
  return (
    <>
      <h1
        style={{
          color: 'red',
          backgroundColor: 'black',
          height: '130px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Purwadhika
      </h1>
      <h2 className={style.bgRed}>Ariviano</h2>
      <Link to="/">
        <button>Back to Home Page</button>
      </Link>
    </>
  );
}
