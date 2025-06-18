"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
// import { selectRoles } from "../api/redux/authSlice";

interface User {
    username: string;
    password: string;
    roles: string[];
    name: string;
    surname: string;
    email: string;
    proj?: string;
    checkArr?: Record<string, any>;
    techStack?: string[];
    toolStack?: string[];
    projRefType: string;
    decription?: string;
}

export default function UsersPage() {
    const [data, setData] = useState<User[] | null>(null);
    const router = useRouter();

    // const roles = useSelector(selectRoles)
    // if (!roles?.includes("Admin")) {
    //     router.push("/")
    // }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/user`);
                const users: User[] = await res.json();

                console.log(users)
                setData(users);
            } catch (error) {
                console.error("Failed to fetch users", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col h-full w-full">
            <div className="p-4 w-4">
                <p className="text-2xl">Registor</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 p-4">
                {data ? (
                    data.map((user, idx) => (
                        <div key={idx} className="border p-4 rounded-lg shadow-md w-64">
                            <h2 className="text-lg font-bold">{user.name} {user.surname}</h2>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <p className="text-xs mt-1">Username: {user.username}</p>
                            <p className="text-sm text-gray-600">{user.projRefType}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading users...</p>
                )}
            </div>
        </div>
    );
}
