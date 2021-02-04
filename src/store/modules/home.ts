import { CATOGORY_TYPES, IHomeState } from '@/typings/home';
import { Module } from 'vuex';
import { IGlobalState } from '../index';
import * as Types from '../action-types'


const state: IHomeState = {
  currentCategory: CATOGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true,
    loading: false,
    offset: 0,
    limit: 5,
    list: []
  }
}

const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state,payload: CATOGORY_TYPES) {
      state.currentCategory = payload
    }
  }
}

export default home