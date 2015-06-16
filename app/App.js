class Test extends React.Component {
    render() {
        console.log("Test");

        return (
            <div>It works!</div>
        );
    }
}

React.render(<Test/>, document.getElementById("app"));
