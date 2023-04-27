import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkBox";
import { fetchTasks, formatDate } from "./helper";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Task } from "@/components/Task";
import Link from "next/link";

export default async function Todo() {
  const pendingTasks = await fetchTasks();
  const completedTasks = await fetchTasks(true)
  
  return (
    <div className="">
      <div className="text-xl my-5 flex flex-col">
        Completed Tasks ({completedTasks?.length})
      </div>
      <div>
    
          {completedTasks?.map((task: Task) => (
            <Task key={task.id} task={task} />
          ))}
      
      </div>
      <div className="text-xl my-5 flex flex-col">
        Remaining Tasks ({pendingTasks?.length})
      </div>
      <div>
        <ul>
          {pendingTasks?.map((task: Task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </div>
      <Link href="/todo/create">
      <Button className="fixed bottom-10 right-10" variant={"rounded"}>
        <Plus />
      </Button>
      </Link>
  
    </div>
  );
}
