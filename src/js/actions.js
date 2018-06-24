import { action, http } from "@hyperapp/fx";

const actions = {
  getSomething: () => state => [
    action("input", "..."),
    http("url", "inputFetched")
  ],
  inputFetched: ({ value }) => ({ input: value }),
  input: ({ value }) => ({ input: value })
};

export default actions;
