import { TodoData } from '../types/tododata'

export async function GetTodos(): Promise<TodoData[]> {
  const response = await fetch(`https://todos.altay.workers.dev/todos`)
  const todoData: TodoData[] = (await response.json()) as TodoData[]
  return todoData
}
