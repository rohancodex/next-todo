import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkBox";
import { fetchTasks, formatDate } from "@/helper";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Task } from "@/components/Task";
import Link from "next/link";

export const revalidate = false;
export default async function Todo() {
  const pendingTasks = await fetchTasks();
  const completedTasks = await fetchTasks(true)
  
  return (
    <div>
      <div className="text-xl my-5 flex flex-col">
        Completed Tasks ({completedTasks?.length})
      </div>
      <div className="overflow-auto h-56">
          {completedTasks?.map((task: Task) => (
            <Task key={task.id} task={task} />
          ))}  
      </div>
      <div className="text-xl my-5 flex flex-col">
        Remaining Tasks ({pendingTasks?.length})
      </div>
      <div className="overflow-auto h-96">
          {pendingTasks?.map((task: Task) => (
            <Task key={task.id} task={task} />
          ))}
      </div>
      <Link href="/todo/create">
      <Button className="fixed bottom-10 right-10" variant={"rounded"}>
        <Plus />
      </Button>
      </Link>
    </div>
  );
}
