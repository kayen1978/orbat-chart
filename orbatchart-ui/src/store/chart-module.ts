import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";
import {
  DEFAULT_OPTIONS, LevelGroupSpecificOptions,
  LevelLayout, LevelSpecificOptions,
  OrbChartOptions, PartialOrbChartOptions,
  SpecificOptions, UnitSpecificOptions
} from "orbatchart";
import Vue from "vue";

export interface ChartState {
  chartOptions: PartialOrbChartOptions;
  levelOptions: LevelSpecificOptions;
  levelGroupOptions: LevelGroupSpecificOptions;
  unitOptions: UnitSpecificOptions;
}

const state: ChartState = {
  chartOptions: {
    ...DEFAULT_OPTIONS,
    maxLevels: 4,
    lastLevelLayout: LevelLayout.TreeRight
  },
  levelOptions: {},
  levelGroupOptions: {},
  unitOptions: {}
};

function mapHelper(entity: any, id, data: any) {
  const oldObj = entity[id] || {};
  const newObj = Object.assign({}, oldObj, data);
  Vue.set(entity, id, newObj);
}


const mutations: MutationTree<ChartState> = {
  setChartOptions(state, value) {
    state.chartOptions = value;
  },

  updateChartOptions(state, value: PartialOrbChartOptions) {
    state.chartOptions = Object.assign({}, state.chartOptions, value);
  },

  setLevelOptions(state, value: LevelSpecificOptions) {
    state.levelOptions = value;
  },

  setUnitOptions(state, value: UnitSpecificOptions) {
    state.unitOptions = value;
  },

  clearLevelOptions(state, id) {
    Vue.delete(state.levelOptions, id);
  },

  updateLevelOptions(state, { id, value }) {
    Vue.set(state.levelOptions, id, value);
    //mapHelper(state.levelOptions, id, value)
  },

  clearSpecificLevelOption(state, { id, name }) {
    Vue.delete(state.levelOptions[id], name);
  },

  setLevelGroupOptions(state, value: LevelGroupSpecificOptions) {
    state.levelGroupOptions = value;
  },

  updateLevelGroupOptions(state, { id, value }) {
    Vue.set(state.levelGroupOptions, id, value)
  },

  clearLevelGroupOptions(state, id) {
    Vue.delete(state.levelGroupOptions, id);
  },

  clearSpecificLevelGroupOption(state, {id, name}) {
    Vue.delete(state.levelGroupOptions[id], name);
  },

  updateUnitOptions(state, { id, value }) {
    Vue.set(state.unitOptions, id, value)
  },

  clearUnitOptions(state, id) {
    Vue.delete(state.unitOptions, id);
  },

  clearSpecificUnitOption(state, {id, name}) {
    Vue.delete(state.unitOptions[id], name);
  },

};

const actions: ActionTree<ChartState, RootState> = {
  clearSpecificLevelOption({ state, commit }, { id, name }) {
    commit('clearSpecificLevelOption', { id, name });
    const options = state.levelOptions[id];
    if (options && Object.keys(options).length == 0) {
      commit('clearLevelOptions', id);
    }
  },

  clearSpecificLevelGroupOption({ state, commit }, { id, name }) {
    commit('clearSpecificLevelGroupOption', { id, name });
    const options = state.levelGroupOptions[id];
    if (options && Object.keys(options).length == 0) {
      commit('clearLevelGroupOptions', id);
    }
  },

    clearSpecificUnitOption({ state, commit }, { id, name }) {
    commit('clearSpecificUnitOption', { id, name });
    const options = state.unitOptions[id];
    if (options && Object.keys(options).length == 0) {
      commit('clearUnitOptions', id);
    }
  }

};

const getters: GetterTree<ChartState, RootState> = {
  specificOptions: (state): SpecificOptions => {
    return { level: state.levelOptions, levelGroup: state.levelGroupOptions, unit: state.unitOptions }
  },

  levels: (state) => Object.keys(state.levelOptions)
};

export default {
  state,
  mutations,
  actions,
  getters
} as Module<ChartState, RootState>;


