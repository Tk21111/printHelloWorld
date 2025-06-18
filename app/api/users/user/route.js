import User from "../../../model/User";
import { connectToDatabase } from "../../../lib/mongoose";

import { NextResponse } from "next/server";


//get user
export async function GET() {
    await connectToDatabase();

    const users = await User.find({
        roles : "User"
    }).select(" -password -roles -_id")

    if (!users) {
        return NextResponse.json({ status: 204 });
    }

    return NextResponse.json(users);
}