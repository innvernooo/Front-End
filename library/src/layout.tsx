import { Outlet } from 'react-router';
import Navbar from './component/navbar';
import Footer from './component/footer';

export default function RootLayout() {
  return (
    <>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
