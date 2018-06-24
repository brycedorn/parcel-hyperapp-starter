import { app } from "hyperapp";
import { withFx } from "@hyperapp/fx";

import state from "./state.js";
import actions from "./actions.js";
import view from "./view.js";

withFx(app)(state, actions, view, document.body);
