import React, { Component, ErrorInfo } from "react";
import { NotFoundPage } from "src/pages";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <NotFoundPage text="Произошла ошибка" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
