import {
	AiFillLinkedin,
	AiFillFacebook,
	AiOutlineWhatsApp,
} from 'react-icons/ai';
import { GoLogoGithub } from 'react-icons/go';
const About = () => {
	return (
		<section className='about lg:grid md:grid-cols-3 gap-9 justify-items-center tracking-wider items-center'>
			<div className='flex justify-center'>
				<div className='max-w-[12rem] sm:max-w-[16rem] '>
					<img
						src={`${process.env.PUBLIC_URL}/images/avatar-2.png`}
						alt='Ahmad Jarrar Avatar'
					/>
				</div>
			</div>

			<div className='mt-10'>
				<h2 className=' text-3xl font-semibold mb-6'>
					I make the w<span className='text-cyan-400'>W</span>w fun.
				</h2>
				<p>
					Hello, I'm a talanted UI Software Engineer From Zarqa,
					Jordan. I enjoy turning complex problems into simple,
					beautiful and intuitive interface designs.I'm passionate
					about the power of colors and shapes in developing a great
					new design, and JavaScript offers me endless fascinating
					possibilities.
				</p>
				<ul
					className='flex gap-4 justify-center items-center mt-8'
					aria-label='Social links'
				>
					<li>
						<a href='#' title='Facebook'>
							<AiFillFacebook className='text-4xl  text-sky-800	' />
						</a>
					</li>
					<li>
						<a href='#' title='Linkedin'>
							<AiFillLinkedin className='text-4xl text-sky-800	' />
						</a>
					</li>
					<li>
						<a href='#' title='whatsapp'>
							<AiOutlineWhatsApp className='text-4xl text-emerald-700	' />
						</a>
					</li>
					<li>
						<a href='#' title='github'>
							<GoLogoGithub className='text-5xl text-gray-700' />
						</a>
					</li>
				</ul>
				<div className='flex justify-center mt-5'>
					<a
						href='#'
						className='text-sm font-semibold bg-cyan-400 px-7 rounded py-2 transition  hover:bg-cyan-300'
					>
						Download my CV
					</a>
				</div>
			</div>
			<div className='pt-10 md:pt-6 text-sm font-medium'>
				<ul>
					<li className='mb-5 flex items-center'>
						<span className='py-1 px-3 mr-2 rounded bg-cyan-400 text-slate-900'>
							Location
						</span>
						<span>Zarqa, Jordan</span>
					</li>
					<li className='mb-5 flex items-center'>
						<span className='py-1 px-3 mr-2 rounded bg-cyan-400 text-slate-900'>
							Age
						</span>
						<span className='font-jetBrains'>29</span>
					</li>
					<li className='mb-5 flex items-center'>
						<span className='py-1 px-3 mr-2 rounded bg-cyan-400 text-slate-900'>
							Major
						</span>
						<span>Software Engineering</span>
					</li>
					<li className='mb-5 flex items-center'>
						<span className='py-1 px-3 mr-2 rounded bg-cyan-400 text-slate-900'>
							Email
						</span>
						<span>ajarar.jo@gmail.com</span>
					</li>
					<li className='mb-5 flex items-center'>
						<span className='py-1 px-3 mr-2 rounded bg-cyan-400 text-slate-900'>
							Phone
						</span>
						<span className='font-jetBrains'>00962788782534</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
