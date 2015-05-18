var HelloWorld = React.createClass({

    getInitialState: function() {
        return {
            input2Value: ''
        }
    },

    render: function() {
        var input2Value = this.state.input2Value || 'no state';

        return (
            <div>
                <input type="text"  onChange={this.handleInput1Change} />    
                <input type="text" value={input2Value} />    
            </div>
        )
    },

    handleInput1Change: function(e) {
        this.setState({
            input2Value: e.target.value
        });
    }
});

React.render(<HelloWorld name = "Eshlee Romero"/>, document.body);
