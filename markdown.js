const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

//This initial string example was taken from freeCodeCamp in order to show the 
//the markdown language working
const initStr = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!`;

class MarkdownBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: initStr
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) =>{
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return(
        <div>
            <h1 id="editor-header">Editor</h1>
            <textarea id="editor" onChange={this.handleChange}>{initStr}</textarea>
            <h1 id="previewer-header">Previewer</h1>
            <Previewer value={this.state.value}/>
        </div>);
    }
}

class Previewer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div dangerouslySetInnerHTML={{__html: marked(this.props.value, {renderer: renderer})}}id="preview">

            </div>
        );
    }
}

ReactDOM.render(
    <MarkdownBox />,
    document.getElementById('markdown')
);