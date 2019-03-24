/* global ReactDOM, React */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

const TestReactElement = React.createElement('h2', null, 'Hello World (React.createElement)');

/**
 * Simple functional component.
 * @param {Object} props component props
 */
function TestFuncitonComponent({ name }) {
    return <h2>Hello { name } (Function Component)</h2>;
}

/**
 * Simple class component.
 */
class TestClassComponent extends React.Component {
    render() {
        const { name } = this.props;

        return <h2>Hello { name } (Class Component)</h2>;
    }
}

/**
 * Simple pure component.
 */
class TestPureComponent extends React.PureComponent {
    render() {
        const { name } = this.props;

        return <h2>Hello { name } (Pure Component)</h2>;
    }
}

// Render no-JSX components
ReactDOM.render(
    TestReactElement,
    document.getElementById('application__no-jsx')
);

// Render JSX components
ReactDOM.render(
    <React.Fragment>
        <TestFuncitonComponent name="World" />
        <TestClassComponent name="World" />
        <TestPureComponent name="World" />
    </React.Fragment>,
    document.getElementById('application__jsx')
);
