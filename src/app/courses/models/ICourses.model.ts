interface IInstructors {
  id: number | string;
  name: string;
  about: string | null;
  image_url: string;
  job_title: string;
}

export interface ICourses {
  id: number | string;
  rate: { rates_count: number; rates_score: number };
  brief: string;
  title: string;
  category: { category_id: string; category_name: string };
  end_date: string;
  image_url: string;
  date: string;
  start_date: string;
  instructors: IInstructors[];
}
