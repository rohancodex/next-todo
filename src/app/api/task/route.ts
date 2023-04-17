import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const task = await prisma.task.create({
  //   data: {
  //     title: "Groceries",
  //     description: "Buy groceries from shop",
  //   },
  // });
  const tasks = await prisma.task.findMany({ where: { is_completed: false } });
  return NextResponse.json({ tasks });
}
