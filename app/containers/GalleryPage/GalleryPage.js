/*
 * GalleryPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class CodeGeneratorPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="gallery-page">
        <Helmet>
          <title>Gallery Page</title>
          <meta
            name="description"
            content="Gallery page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>GALLERY</h1>
      </div>
    );
  }
}
