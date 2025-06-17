import User from "../../../model/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";

export async function POST(req) {
    
    await connectToDatabase();
    try {
        const { user, pwd , email , name , surname ,  nickname , techStack , toolStack , projRefType } = await req.json();

        if (!user || !pwd || !email || !name || !surname || !nickname  || !projRefType) return NextResponse.json({ status: 400 });

        const duplicate = await User.findOne({ username: user }).lean().exec();
        if (duplicate) return NextResponse.json({ status: 409 }); // Conflict

        const hashpwd = await bcrypt.hash(pwd, 10);

        const tmp ={}
        if(techStack) tmp.techStack = techStack;
        if(toolStack) tmp.toolStack = toolStack;

        await User.create({
            username: user,
            password: hashpwd,
            email,
            name,
            surname,
            ...tmp,
            projRefType
        });

        return NextResponse.json({ status: 200 });
    } catch (err) {
        console.log("Error creating user:", err);
        return NextResponse.json({ status: 500, error: err.message });
    }
}