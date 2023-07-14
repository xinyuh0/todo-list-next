export enum DisplayType {
  Todo = "todo",
  Done = "done",
}

export interface TodoItem {
  done: boolean;
  title: string;
  description: string;
  createTime: number;
  uuid: string;
}