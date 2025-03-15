import connectMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request:Request,{params}:{params:{id:string}}){
  const {id} = params;
  const {newTitle:title,newDescription:description} = await request.json();
  await connectMongodb();
  await Topic.findByIdAndUpdate(id,{title,description});
  return NextResponse.json({message:"Topic Updated"},{status:201});
}

export async function GET(request:Request,{params}:{params:{id:string}}){
  const {id} = params;
  await connectMongodb();
  const topic = await Topic.findById({_id:id});
  return NextResponse.json({topic},{status:200});
}