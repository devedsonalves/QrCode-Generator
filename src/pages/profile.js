import { useParams } from 'react-router-dom';

const Profile = () => {
	const { name, linkedin, github } = useParams();

	const githubString = 'https://www.github.com/' + github;
	const linkedinString = 'https://www.linkedin.com/in/' + linkedin;

	return (
		<div className='flex flex-col items-center justify-center'>
			<p className='m-10'>
				Hello, my name is <span className='font-bold'>{name}</span>
			</p>

			<p>Feel free to reach me in my social media:</p>

			<div className='m-5'>
				<a
					target='_blank'
					href={githubString}
					className='bg-green-400 rounded-lg text-green-900 font-semibold p-3 m-2 text-center'
				>
					GitHub
				</a>
				<a
					target='_blank'
					href={linkedinString}
					className='bg-green-400 rounded-lg text-green-900 font-semibold p-3 m-2 text-center'
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
};

export default Profile;
