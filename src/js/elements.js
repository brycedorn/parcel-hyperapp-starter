import { h } from "hyperapp";
import picostyle from "picostyle";

const style = picostyle(h);

const primaryColor = "#0bf";
const secondaryColor = "#fff";
const tertiaryColor = "#08f";

export const Wrapper = style("div")({
  background: `linear-gradient(to bottom, ${primaryColor}, ${tertiaryColor})`,
  color: secondaryColor,
  fontFamily: "sans-serif",
  height: "100vh",
  textAlign: "center"
});

export const Input = style("input")({
  color: secondaryColor,
  background: tertiaryColor,
  border: "none",
  borderBottom: `2px solid ${secondaryColor}`,
  fontSize: "1em",
  width: "240px",
  height: "24px",
  padding: "4px",
  transition: "all 0.1s",
  textAlign: "center",

  ":focus": {
    color: primaryColor,
    background: secondaryColor,
    borderBottom: `2px solid ${tertiaryColor}`,
    outline: "0"
  }
});

export const Header = style("h1")({
  fontSize: "4em",
  fontWeight: "400",
  margin: "0",
  paddingTop: "1.4em"
});

export const Subhead = style("h2")({
  fontWeight: "200",
  margin: "1.6em 0"
});
