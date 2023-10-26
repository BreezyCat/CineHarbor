import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Anda dapat menangani kesalahan di sini, misalnya, melaporkan kesalahan
    console.error('Error:', error);
    console.error('Error Info:', info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Tampilkan pesan kesalahan atau tindakan alternatif di sini
      return <div>Terjadi kesalahan.</div>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node // Menentukan bahwa 'children' adalah node React
};

export default ErrorBoundary;
