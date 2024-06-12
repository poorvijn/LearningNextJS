'use client'
import { usePathName } from 'next/navigation';

export default function Cart()
{
    const pathName = usePathName();
    console.log(pathName);

    return <div>
        <h1>This is a cart component</h1>
    </div>
}