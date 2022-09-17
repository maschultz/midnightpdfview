import React from 'react';

import SinglePagePDFViewer from './components/pdf/single-page';
import AllPagesPDFViewer from './components/pdf/all-pages';
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from './MidnightWhitepaper.pdf';

import './styles.css';

export default function App() {
	return (
		<div className='App'>
			<h4>
				Midnight Whitepaper - All Pages -{' '}
				<a href='/pdf/MidnightWhitepaper.pdf' target='_blank'>
					Download PDF Instead
				</a>
			</h4>
			<div className='all-page-container'>
				<AllPagesPDFViewer pdf={samplePDF} />
			</div>
		</div>
	);
}
