import { log } from "console";
import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from 'zod';
const bodySchema = z.object({
  title:z.string({invalid_type_error:'title must be of type string'}),
  description:z.string({invalid_type_error:'description must be of type string'}),
  // is_completed:z.boolean({invalid_type_error:'is_completed must be of type string'}),
}).required()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const is_completed = searchParams.get('is_completed');
  const tasks = await prisma.task.findMany({where:{is_completed: is_completed==="true"?true:false}});

  return NextResponse.json({ tasks });
}

export const POST = async(request:Request)=>{
  try {
    const body = await request.json();
    // const result = bodySchema.safeParse(body);
    // if(!result.success){
    //   const formatted = result.error.format();
    //   return NextResponse.json({formatted},{status:400})
    // }

    const data = await prisma.task.create({data:body});
    console.log(data)
    return NextResponse.json({ data })
  } catch (error) {
    console.log(error);
    return NextResponse.json({message:'An error occured!',error:error},{status:400})
  }
}

export const PUT = async(request:Request)=>{
  try{
    const body = await request.json();
    // const result = bodySchema.safeParse(body);
    const dbResult = await prisma.task.update({where:{id:body?.id},data:{is_completed:body?.is_completed}});
    console.log('rsult',dbResult);
    return NextResponse.json({message:'',error:dbResult})
  } catch(error){
      console.log(error);
  }
}
