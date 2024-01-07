export interface IDepartment {
  id: number | string;
  title: string;
  courses_count?: number;
}
export interface IDepartments {
  departments: {
    title: string;
    description: string;
  };
  items: IDepartment[];
}
