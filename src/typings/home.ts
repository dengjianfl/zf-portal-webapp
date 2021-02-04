
export interface Ilesson {
  title: string,
  video: string,
  poster: string,
  price: number,
  category?:string
}

export interface ISlider {
  url: string
}

export interface ILessons {
  hasMore: boolean,
  loading: boolean,
  offset: number,
  limit: number,
  list: Ilesson[]
}

export interface IHomeState {
  currentCategory: CATOGORY_TYPES,
  sliders: ISlider[],
  lessons: ILessons
  
}

export enum CATOGORY_TYPES {
  ALL,
  REACT,
  VUE,
  NODE
}