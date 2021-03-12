function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value });

    this.props.collect(event.target.value);
  }

  toggleFullScreen() {
    const editorContainerEl = document.getElementsByClassName('editor-container')[0];
    const editorEl = document.getElementById('editor');
    const previewContainerEl = document.getElementsByClassName('preview-container')[0];
    editorContainerEl.classList.toggle('full-screen');
    editorEl.classList.toggle('expand-area');
    previewContainerEl.classList.toggle('d-none');
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "editor-container" }, /*#__PURE__*/
      React.createElement("div", { className: "header" }, /*#__PURE__*/
      React.createElement("h5", null, "Editor"), /*#__PURE__*/
      React.createElement("i", { type: "button", onClick: this.toggleFullScreen, class: "fas fa-expand-alt" })), /*#__PURE__*/

      React.createElement("textarea", { id: "editor", onChange: this.handleChange, placeholder: "User Input goes here", className: "editor", value: this.state.userInput })));


  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleFullScreen() {
    const editorContainerEl = document.getElementsByClassName('editor-container')[0];
    const previewContainerEl = document.getElementsByClassName('preview-container')[0];
    const previewEl = document.getElementById('preview');
    editorContainerEl.classList.toggle('d-none');
    previewContainerEl.classList.toggle('full-screen');
    previewEl.classList.toggle('expand-area');
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "preview-container" }, /*#__PURE__*/
      React.createElement("div", { className: "header" }, /*#__PURE__*/
      React.createElement("h5", null, "Preview"), /*#__PURE__*/
      React.createElement("i", { type: "button", onClick: this.toggleFullScreen, class: "fas fa-expand-alt" })), /*#__PURE__*/

      React.createElement("div", { dangerouslySetInnerHTML: {
          __html: marked(this.props.text, { renderer: renderer }) },
        id: "preview", className: "preview" })));


  }}


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "collectsInput",





    input => {
      this.setState({
        userInput: input });

    });this.state = { userInput: placeholder };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(UserInput, { collect: this.collectsInput }), /*#__PURE__*/
      React.createElement(Preview, { text: this.state.userInput })));


  }}


const placeholder = `# Hi Guys, this is my React Markdown Previewer!
## Above one is Heading, and this is a sub-heading...

You can write some code, \`<div></div>\`, within 2 backticks.

\`\`\`
// this is multi-line code:

function add(number1, number2) {
  if (true) {
    return number1 + number2;
  }
}
\`\`\`

You can also make text **bold** or _italic_ or **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

Navigate to [links](https://www.youtube.com), and
> Block Quotes!

Even build Tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));