// src\draksa\cumponents\Her.tsx
'use client';

import { Component } from 'react';

import type { ErrorInfo, ReactNode } from 'react';

export class Her extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;

    return hasError ? (fallback ?? <div>Something went wrong. :3</div>) : children;
  }
}
