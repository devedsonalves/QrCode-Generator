import { useParams } from 'react-router-dom';

const Profile = () => {
	const { name, linkedin, github } = useParams();

	const current = window.location.href;
	const linkedinString = 'https://www.linkedin.com/in/' + linkedin;
	const githubString = 'https://www.github.com/' + github;

	return (
		<div className=''>
			<p>Hello, my name is {name}</p>
			{current}

			<a href={githubString}>GitHub</a>
			<a href={linkedinString}>LinkedIn</a>
		</div>
	);
};

export default Profile;
