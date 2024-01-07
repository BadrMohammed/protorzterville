export interface ICarousel {
  id: number | string;
  date: string;
  brief: string;
  title: string;
  image_url: string;
  link: {
    url: string;
    title: string;
    is_external_link: boolean;
  };
}
