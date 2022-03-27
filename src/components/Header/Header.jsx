import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	const [menu, showHideMenu] = useState('hidden');
	const [activeBtn, setActiveBtn] = useState('');
	const handleOpenMenu = () => {
		const newMenu = menu === 'block' ? 'hidden' : 'block';
		const newBtn = activeBtn === styles.active ? '' : styles.active;
		showHideMenu(newMenu);
		setActiveBtn(newBtn);
	};
	const handleLinkClick = () => {
		showHideMenu('hidden');
		setActiveBtn('');
	};
	const links = [
		{
			text: 'About',
			path: '/',
		},
		{
			text: 'Skills',
			path: '/skills',
		},
		{
			text: 'Experience',
			path: '/experience',
		},
		{
			text: 'Projects',
			path: '/projects',
		},
	];

	return (
		<header className='flex items-center mx-auto justify-between sm:justify-between xl:w-7/12 lg:w-9/12 lg:flex-row sm:flex-col'>
			<Helmet>
				<body className={menu === 'block' ? 'overflow-y-hidden' : ''} />
			</Helmet>
			<nav
				className={`text-slate-900 sm:text-slate-50 absolute sm:relative sm:flex backdrop-blur-xl top-0 left-0 right-0 bottom-0  overflow-y-hidden sm:overflow-y-visible	${menu} `}
			>
				<span
					aria-hidden='true'
					className={`${styles.header_left} border-gray-700 border-solid absolute top-0 bottom-0 sm:flex hidden border-l-slate-50`}
				></span>
				<ul
					className={`flex flex-col justify-center h-full sm:h-auto sm:flex-row`}
				>
					{links.map(({ text, path }) => (
						<li
							key={text}
							className={`sm:mt-0 mt-3 ${styles.header_link}`}
						>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'text-cyan-400 sm:bg-cyan-400 scale-[1.15] translate-y-[-12px] z-20 sm:text-slate-900 rounded'
										: 'sm:text-late-50 sm:bg-gray-700 '
								}
								to={path}
								onClick={handleLinkClick}
							>
								{text}
							</NavLink>
						</li>
					))}
				</ul>
				<span
					aria-hidden='true'
					className={`${styles.header_right} border-gray-700 border-solid absolute top-0 bottom-0 sm:flex hidden border-r-slate-50 z-[-1]`}
				></span>
			</nav>

			<div className={'font-signika sm:mt-8 lg:mt-0'}>
				<h1 className='font-semibold text-xl'>Ahmad Rashad Jarrar</h1>
				<h2 className='italic tracking-wider text-center text-sm'>
					Front End Developer
				</h2>
			</div>
			<button
				className={`${activeBtn} sm:hidden flex flex-col z-[1]`}
				onClick={handleOpenMenu}
			>
				<span
					className={`${styles.header_bar} h-0.5 w-5 mb-1 block bg-gray-700`}
				></span>
				<span
					className={`${styles.header_bar} h-0.5 w-5 mb-1 block bg-gray-700`}
				></span>
				<span
					className={`${styles.header_bar} h-0.5 w-5 mb-1 block bg-gray-700`}
				></span>
			</button>
		</header>
	);
};

export default Header;
