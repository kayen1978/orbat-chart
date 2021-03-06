import Vue from 'vue';
import Component from 'vue-class-component'
import { OrbChartOptions } from "orbatchart";

@Component
export class SettingsPanelMixins extends Vue {
  get activeSettingsPanel() {
    return this.$store.state.ui.activeSettingsPanel;
  }

  set activeSettingsPanel(value) {
    if (this.activeSettingsPanel !== value) this.$store.commit("setActiveSettingsPanel", value);
  }

  get highlightedLevels(): number[] {
    return this.$store.state.ui.highlightedLevels;
  }

  set highlightedLevels(value: number[]) {
    if (this.highlightedLevels !== value) this.$store.commit("setHighlightedLevels", value);
  }


}

@Component
export class PanelMixins extends Vue {

  get orbatPanel() {
    return this.$store.state.ui.orbatPanel;
  }

  set orbatPanel(v) {
    if (this.orbatPanel !== v) this.$store.commit("setOrbatPanel", v);
  }

  get settingsPanel() {
    return this.$store.state.ui.settingsPanel;
  }

  set settingsPanel(v) {
    if (this.settingsPanel !== v) this.$store.commit("setSettingsPanel", v);
  }

  get settings(): OrbChartOptions {
    return this.$store.state.chart.chartOptions;
  }

  get interactiveChart(): boolean {
    return this.$store.state.ui.interactiveChart;
  }

  set interactiveChart(v) {
    if (this.interactiveChart !== v) this.$store.commit('setInteractiveChart', v);
  }

}
