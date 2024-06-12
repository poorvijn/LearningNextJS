import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Accounts()
{   
    const userProfileInfo = null;
    if(userProfileInfo===null) redirect('profile');

    return (
    <div>
        <h1>Accounts page</h1>
        <Link href={'/accounts/membership'}>To Membership page</Link>
    </div>
)
}