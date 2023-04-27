interface Task {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
  created_at: Date;
  updated_at: Date;
}

type CreateTask = Pick<Task, "title" | "description">;
