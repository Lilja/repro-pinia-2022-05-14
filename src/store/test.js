import { defineStore } from "pinia";

const getDefaultState = () => {
  return {
    foo: "bar",
  };
};

export const useMainStore = defineStore("main", {
  state: getDefaultState,
});
