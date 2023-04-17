import Image from "next/image";
import { Inter } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkBox";

const inter = Inter({ subsets: ["latin"] });

export default async function Todo() {
  const response = await fetch("http://localhost:3000/api/task");
  const { tasks } = await response.json();
  // const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
  //   Date.now()
  // );
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
    }).format(new Date(date));
  };

  return (
    <div className="">
      <div className="text-xl my-5">Remaining Tasks ({tasks?.length})</div>
      <div>
        <ul>
          {tasks?.map((task: any) => (
            <Card key={task?.id}>
              <CardContent className="flex items-center gap-5 justify-between">
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <p className="text-md">{task?.title}</p>
                </div>
                <p className="text-gray-600 text-sm">
                  {formatDate(task?.created_at)}
                </p>
              </CardContent>
            </Card>
            // <li key={task?.id}>{task?.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
