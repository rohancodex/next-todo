import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkBox";
import { fetchIncompleteTasks, formatDate } from "./helper";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
export default async function Todo() {
  const pendingTasks = await fetchIncompleteTasks();

  return (
    <div className="">
      <div className="text-xl my-5 flex flex-col">
        Remaining Tasks ({pendingTasks?.length})
      </div>
      <div>
        <ul>
          {pendingTasks?.map((task: Task) => (
            <Card key={task?.id}>
              <CardContent className="flex items-center gap-5 justify-between">
                <div className="flex gap-4 items-center">
                  <Checkbox defaultChecked={task?.is_completed} />
                  <p className="text-md">{task?.title}</p>
                </div>
                <p className="text-gray-600 text-sm">
                  {formatDate(task?.created_at)}
                </p>
              </CardContent>
            </Card>
          ))}
        </ul>
      </div>
      <Button className="fixed bottom-10 right-10" variant={"rounded"}>
        <Plus />
      </Button>
    </div>
  );
}
