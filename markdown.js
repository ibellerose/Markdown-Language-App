class MarkdownBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'abc'
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
            <textarea id="editor" onChange={this.handleChange}>type in here</textarea>
            <h1>{this.state.value}</h1>
            <Previewer props={this.state.value}/>
        </div>);
    }
}

class Previewer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }
    componentWillReceiveProp(nextProp){
        this.setState({value : nextProp.value });
    }
    render(){
        return (
            <div>
                <h1>value: {this.props.value}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <MarkdownBox />,
    document.getElementById('markdown')
);