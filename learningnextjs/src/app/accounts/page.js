import Link from 'next/link';

export default function Accounts()
{
    return (
    <div>
        <h1>Accounts page</h1>
        <Link href={'/accounts/membership'}>To Membership page</Link>
    </div>
)
}