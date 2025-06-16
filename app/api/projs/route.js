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

        
        const newProj = await Proj.findByIdAndUpdate(_id,{
            name,
            user,
            dateStart,
            dateEnd,
            techStack,
            toolStack,
            description,
            githubLink}
        )

        return NextResponse.json({_id : newProj} , {status : 200})
    } catch (err){
        console.log("create proj" , err)
        return NextResponse.json({err : err} , {status : 500})

    }
}

