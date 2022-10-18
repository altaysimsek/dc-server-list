export interface TodoData {
  id: number
  name: string
  completed: boolean
}

export interface TodoDataListProps {
  todoDataList: TodoData[]
}
