import { codingSkills, pkgManager, os, pgManager } from '../../api';
import Card from '../Card/Card';

const Skills = () => {
	return (
		<section className='mb-10'>
			<div>
				<h2 className='text-center font-semibold text-2xl mb-10'>
					Coding & Designing
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-9 justify-center'>
					{codingSkills.map(({ title, image, text, basic, mid }) => {
						return (
							<Card
								key={title}
								title={title}
								image={image}
								text={text}
								basic={basic}
								mid={mid}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<h2 className='text-center font-semibold text-2xl my-10'>
					Modules Packages Managers
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-9 justify-center'>
					{pkgManager.map(({ title, image, text, basic, mid }) => {
						return (
							<Card
								key={title}
								title={title}
								image={image}
								text={text}
								basic={basic}
								mid={mid}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<h2 className='text-center font-semibold text-2xl my-10'>
					OS Setup & Maintenance
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-9 justify-center'>
					{os.map(({ title, image, text, basic, mid }) => {
						return (
							<Card
								key={title}
								title={title}
								image={image}
								text={text}
								basic={basic}
								mid={mid}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<h2 className='text-center font-semibold text-2xl my-10'>
					Projects Management and Planning
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-9 justify-center'>
					{pgManager.map(({ title, image, text, basic, mid }) => {
						return (
							<Card
								key={title}
								title={title}
								image={image}
								text={text}
								basic={basic}
								mid={mid}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
