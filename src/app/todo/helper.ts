export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  }).format(new Date(date));
};

export const fetchIncompleteTasks = async () => {
  const response = await fetch("http://localhost:3000/api/task", {
    next: { revalidate: 60 },
  });
  const { tasks }: { tasks: Task[] } = await response.json();
  return tasks;
};
