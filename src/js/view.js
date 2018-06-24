import { h } from "hyperapp";

import { Header, Input, Subhead, Wrapper } from "./elements";

const view = (state, actions) => (
  <Wrapper>
    <Header>Parcel Hyperapp Starter</Header>
    <Subhead>{state.input}</Subhead>
    <Input
      type="text"
      oninput={e => actions.input({ value: e.target.value })}
      value={state.input}
    />
  </Wrapper>
);

export default view;
