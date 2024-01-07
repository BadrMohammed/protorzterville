export interface IForm {
  name: string;
  type?: string;
  title?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: Function;
  min?: string;
}

export enum ExernalAuthType {
  Facebook = 1,
  Google = 2,
}

export interface IExernalAuth {
  type: ExernalAuthType;
  title: string;
}
