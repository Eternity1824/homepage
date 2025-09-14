import { redirect } from 'next/navigation';

export default function Home() {
  // This should never be reached due to middleware redirect
  // But just in case, redirect to intro to maintain consistency
  redirect('/intro');
}