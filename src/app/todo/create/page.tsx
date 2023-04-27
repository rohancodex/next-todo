'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function CreateTask() {
    const [task,setTask] = useState<CreateTask>({title:'',description:''});
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const router = useRouter();
  const createTask = async()=>{
      setIsLoading(true);
      if(task.title && task.description){
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(task),
        })
        if(res.ok){
            router.push('/todo')
        }
        setIsLoading(false);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({...task,[e.target.name]:e.target.value});
  };

  return (
    <Card className="p-5">
      <div className="text-xl my-5 flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input value={task.title} onChange={handleChange} name="title" id="title" placeholder="Buy Groceries "/>
      </div>
      <div className="text-xl my-5 flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea onChange={handleChange} value={task.description} id="description" name="description" placeholder="Buy Milk and eggs"/>
      </div>
      <Button disabled={isLoading} size="lg" onClick={createTask}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
        Create Task
      </Button>
    </Card>
  );
}
