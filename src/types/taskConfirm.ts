export interface TaskConfirmRequestType {
  taskId: string;
  confirmImg: string;
  addItems: string[];
  itemsType: string[];
  contents: string;
  postDate: Date;
}

export interface TaskConfirmFormType extends Omit<TaskConfirmRequestType, "taskId" | "postDate"> {}

export type TaskConfirmUpdateHandlerType = <Key extends keyof TaskConfirmFormType>(
  key: Key,
  value: TaskConfirmFormType[Key],
) => void;

export interface TaskConfirmPostProps {
  taskConfirmForm: TaskConfirmFormType;
  updateInputValue: TaskConfirmUpdateHandlerType;
}
