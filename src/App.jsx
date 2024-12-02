import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Faq from './components/Faq';
import Cookies from './components/Cookies';
import ContentSection from './components/ContentSection';
import CourseBar from './components/CourseBar';
import CourseBarMentor from './components/CourseBarMentor';

const App = () => {
	return (
		<div className='flex flex-col min-h-screen select-none'>
			<Navbar />
			<main className='flex-grow'>
				<Banner />
				<About />
				<ContentSection />
				<div id='support'>
					<CourseBar />
					<Hero />
					<CourseBarMentor />
					<Hero2 />
				</div>
				<Faq />
			</main>
			<Footer />
			<Cookies />
		</div>
	);
};

export default App;
