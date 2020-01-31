export const store = {
  state: {
    info: Object,
    current: 0
  },
  setInfo(newValue) {
    this.state.info = newValue;
  },
  setCurrent(newValue) {
    this.state.current = newValue;
  }
};
