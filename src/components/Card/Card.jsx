const Card = ({ image, title, text, basic, mid }) => {
	return (
		<div className='flex '>
			<div className='w-12 shrink-0 mt-4 mr-2'>
				<img
					src={`${process.env.PUBLIC_URL}/images/${image}`}
					alt='HTML logo'
				/>
			</div>
			<div className='bg-white p-6 shadow'>
				<h3 className='flex justify-between items-baseline'>
					<span className=' py-1 px-3 inline-block rounded bg-cyan-400 text-gray-700 mb-4 font-semibold'>
						{title}
					</span>
					{basic && (
						<span className='text-sm text-orange-600 font-bold'>
							Basic
						</span>
					)}
					{mid && (
						<span className='text-sm text-green-600  font-bold'>
							Mid
						</span>
					)}
				</h3>
				<p className='text-sm text-gray-700'>{text}</p>
			</div>
		</div>
	);
};

export default Card;
