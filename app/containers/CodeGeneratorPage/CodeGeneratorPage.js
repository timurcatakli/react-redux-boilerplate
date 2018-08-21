import React, { Fragment } from 'react';
import Snippets from './Snippets';
import WrappedCodeGeneratorForm from './WrappedCodeGeneratorForm';

class CodeGeneratorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketNumber: null,
      branchType: null,
      prComment: null,
      resolve: true,
    };
  }

  componentDidMount() {
    const sessionState = localStorage.getItem('repoState');
    this.setState(JSON.parse(sessionState));
  }

  handleFormValues = (values) => {
    this.setState((prevValues) => {
      const currValues = { ...prevValues, ...values };
      currValues.resolve = prevValues.resolve
      // console.log('values', currValues)
      return currValues;
    }, localStorage.setItem('repoState', JSON.stringify(values)));
  };

  handleResolve = (e) => {
    this.setState((prevValues) => {
      const currValues = { ...prevValues };
      currValues.resolve = Boolean(e.target.checked)
      return currValues;
    });
  };

  render() {
    const {
      ticketNumber, branchType, prComment, resolve
    } = this.state;

    return (
      <Fragment>
        <br />
        <br />
        <br />
        <WrappedCodeGeneratorForm
          {...this.state}
          handleFormValues={this.handleFormValues}
          handleResolve={this.handleResolve}
        />
        <br />
        <br />
        <br />

        {ticketNumber && (
          <Snippets
            ticketNumber={ticketNumber}
            branchType={branchType}
            prComment={prComment}
            resolve={resolve}
          />
        )}
      </Fragment>
    );
  }
}

export default CodeGeneratorPage;
