"use client";

import { formatDate, updateTask } from "@/app/todo/helper";
import { Checkbox } from "./ui/checkBox";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

export const Task = ({ task }: { task: Task }) => {
  const router = useRouter();
  
  const handleCheck = async(id:number,check: boolean) => {
    await updateTask(id,check);
    router.refresh()
  };

  return (
    <Card className=" hover:border-foreground" key={task?.id}>
      <CardContent className="flex items-center gap-5 justify-between">
        <div className="flex gap-4 items-center">
          <Checkbox
            onCheckedChange={(e:boolean)=>handleCheck(task?.id,e)}
            defaultChecked={task?.is_completed}
          />
          <p className="text-md">{task?.title}</p>
        </div>
        <p className="text-gray-600 text-sm">{formatDate(task?.created_at)}</p>
      </CardContent>
    </Card>
  );
};
