'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  function handleNavigation()
  {
    router.push('products');
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next JS</h1>
      <Link href={'/products'}>Navigate to Products page</Link>
      <Link href={'/accounts'}>Navigate to Accounts page</Link>

      <h2>Alternate way of navigation using useRouter</h2>
      <button onClick={handleNavigation}>Navigate to Products page</button>
    </main>
  );
}
