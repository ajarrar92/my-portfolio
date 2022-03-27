import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Four0Four from './components/Four0Four/Four0Four';
const paths = ['/', '/about'];
/**
 * @react-router-dom v6 supports only the string type on the path attribute
 */
function App() {
	return (
		<div className='container px-6 sm:px-0 mx-auto pt-10 sm:pt-20 text-gray-700'>
			<Router>
				<Header />
				<main className='mt-16 sm:mt-20'>
					<article>
						<Routes>
							{paths.map((path, index) => (
								<Route
									key={path + index}
									path={path}
									element={<About />}
								/>
							))}
							<Route path='/skills' element={<Skills />} />
							<Route
								path='/experience'
								element={<Experience />}
							/>
							<Route path='/projects' element={<Projects />} />
							<Route path='*' element={<Four0Four />} />
						</Routes>
					</article>
				</main>
			</Router>
		</div>
	);
}

export default App;
