import './App.css';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Formik } from 'formik';
import React, { useState } from 'react';

import { CheckForm } from './components/CheckForm/CheckForm';
import { PDFView } from './components/PDFView/PDFView';
import { initialValues } from './constants';

function App() {
  const [data, setData] = useState(null);

  function makePdfDoc(values) {
    setData(values);
  }

  return (
    <div className="container">
      <div className="column">
        <Formik onSubmit={makePdfDoc} initialValues={initialValues}>
          {(formProps) => <CheckForm {...formProps} />}
        </Formik>
      </div>
      <div className="column">
        <div className="pdf-preview">
          <PDFView data={data} />
        </div>
        {/*<div style={{ marginBottom: 30 }}>*/}
        {/*  <PDFViewer width="500" height="400">*/}
        {/*    <PDFView />*/}
        {/*  </PDFViewer>*/}
        {/*</div>*/}
        {data && Object.keys(data).length > 0 ? (
          <PDFDownloadLink document={<PDFView data={data} />} fileName="check.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Завантажити PDF')}
          </PDFDownloadLink>
        ) : null}
      </div>
    </div>
  );
}

export default App;
