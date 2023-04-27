export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  }).format(new Date(date));
};

export const fetchTasks = async (is_completed:boolean=false) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task?is_completed=${is_completed}`, {
    next: { revalidate: 0 },
  });
  const { tasks }: { tasks: Task[] } = await response.json();
  return tasks;
};

export const updateTask = async (id:number,is_completed:boolean)=>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task`,{
    method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
    body: JSON.stringify({id,is_completed}),
  })
  return response
}
