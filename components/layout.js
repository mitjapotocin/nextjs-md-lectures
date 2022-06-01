import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='mb-8 py-4 bg-orange-300'>
        <div className='container mx-auto flex'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
    </div>
  );
}
