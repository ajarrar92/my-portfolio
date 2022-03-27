const Four0Four = () => {
	return (
		<div className='flex justify-center items-center flex-col font-signika'>
			<div className='max-w-[12rem] sm:max-w-[16rem] '>
				<img
					src={`${process.env.PUBLIC_URL}/images/404.png`}
					alt='Ahmad Jarrar Avatar'
				/>
			</div>
			<div className='mt-10'>
				<h2 className='font-extrabold text-9xl text-center oldstyle-nums'>
					404
				</h2>
				<p className='font-extrabold text-xl text-center pl-3'>
					Page not found.
				</p>
				<p className='font-extrabold text-xl text-center mt-2 pl-3'>
					We don't speak an alien language, use the navigation to
					explore the site.
				</p>
			</div>
		</div>
	);
};
export default Four0Four;
