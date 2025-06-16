import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongoose";
import Proj from "../../model/Proj"
export async function GET(){

    await connectToDatabase();
    try {
        const projs = await Proj.find()

        if(!projs){
            return NextResponse.json({status : 404});
        }else {
            return NextResponse.json(projs)
        }
    } catch (err){
        console.log("get projs" , err)
    }
}

export async function POST(req){
    await connectToDatabase();

    try{
        const {name, user , dateStart , dateEnd , description } = await req.json();

        const newProj = await Proj.create(
            name,
            user,
            dateStart,
            dateEnd,
            description
        )

        return NextResponse.json({_id : newProj} , {status : 200})
    } catch (err){
        
        console.log("create proj" , err)
        return NextResponse.json({err : err} , {status : 500})

    }
}

export async function PATCH(req){
    await connectToDatabase();

    try{
        const {name, user , dateStart , dateEnd , description , techStack , toolStack, githubLink , _id} = await req.json();
        if (!_id) {
            return NextResponse.json({ error: "_id is required" }, { status: 400 });
        }
         const updateFields = {};
        if (name !== undefined && name !== null && name !== '') updateFields.name = name;
        if (user !== undefined && user !== null && user !== '') updateFields.user = user;
        if (dateStart !== undefined && dateStart !== null && dateStart !== '') updateFields.dateStart = dateStart;
        if (dateEnd !== undefined && dateEnd !== null && dateEnd !== '') updateFields.dateEnd = dateEnd;
        if (description !== undefined && description !== null && description !== '') updateFields.description = description;
        if (techStack !== undefined && techStack !== null && techStack.length > 0) updateFields.techStack = techStack;
        if (toolStack !== undefined && toolStack !== null && toolStack.length > 0) updateFields.toolStack = toolStack;
        if (githubLink !== undefined && githubLink !== null && githubLink !== '') updateFields.githubLink = githubLink;


        const newProj = await Proj.findByIdAndUpdate(_id, updateFields, {new : true});

        return NextResponse.json({_id : newProj} , {status : 200})
    } catch (err){
        console.log("create proj" , err)
        return NextResponse.json({err : err} , {status : 500})

    }
}

