"use client"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRoles } from "../api/redux/authSlice";
import { useRouter } from "next/navigation";

interface Proj{

}
export default function Users() {

    const [data , setData] = useState<Proj[]>();
    const navigate = useRouter()
    const roles = useSelector(selectRoles)
    if(!roles?.includes("Admin")){
        navigate.push("/")
    } 

    useEffect(()=>{
        const fetchProjs = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/projs`);
            const data  = await res.json();
            setData(data);
        }

        fetchProjs();
    },[])


    return (
        <div className="flex flex-row flex-wrap">
            {

            }
        </div>
    )
}