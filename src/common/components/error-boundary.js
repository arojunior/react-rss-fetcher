import React, { Component } from 'react';
import AlertBox from './alert-box';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo, error);
  }

  render() {
    if (this.state.hasError) {
      return <AlertBox type="error">Something went wrong.</AlertBox>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;