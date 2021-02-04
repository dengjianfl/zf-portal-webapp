import { ISlider } from '@/typings/home';
import axios from '.';

export function getSliders<T>() {
  return axios.get<T,T>('/slider/list')
}