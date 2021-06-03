import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }
    componentDidCatch(error) {
        this.setState({ hasError: true });
        // sending the error to a server, o show in console.log, or whatever
        console.log(error);
    }
    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
