import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Home() {
	const current = window.location.href;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [htmlBlobUrl, setHtmlBlobUrl] = useState(null);
	const [formData, setFormData] = useState('');

	const linkURL =
		current +
		`profile/${formData.name}/${formData.linkedin}/${formData.github}`;

	const generateHtmlFile = ({ id }) => {
		var htmlString = `
		<!DOCTYPE html>
		<html>
				<head>
						<title>giovanna</title>
				</head>
				<body>
						<p>Hello, my name is gio</p>
						<h1>My history</h1>
						
						<a href="http://linkedin.com/in/giovannatrigueiro">GitHub</a>
						<a href="http://github.com/giovannat">LinkedIn</a>
						
				</body>
		</html>
	`;
		var htmlBlob = new Blob([htmlString], { type: 'text/html' });
		var blobUrl = URL.createObjectURL(htmlBlob);
		setHtmlBlobUrl(blobUrl);
	};

	const onSubmit = (data) => {
		setFormData(data);
	};

	return (
		<section className=' bg-gray-100 flex justify-center'>
			<div className='bg-gray-200 m-10 rounded-lg flex flex-col w-1/2 h-fit items-center'>
				<h1 className='font-bold text-2xl'>QR Code Generator</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center gap-5'
				>
					<div className=''>
						<label htmlFor='name' className='mx-3'>
							Name
						</label>
						<input
							id='name'
							placeholder='Your unique name'
							{...register('name', { required: true })}
							className='bg-transparent border border-b-gray-400'
						></input>
						{errors.name && (
							<span className='text-red-400'>This field is required</span>
						)}
					</div>

					<div>
						<label for='linkedin'>Linkedin Username</label>
						<input
							id='linkedin'
							placeholder='Your linkedin Url'
							{...register('linkedin', { required: true })}
							className='bg-transparent border border-b-gray-400'
						></input>
						{errors.linkedin && (
							<span className='text-red-400'>This field is required</span>
						)}
					</div>

					<div>
						<label for='github'>Github Username</label>
						<input
							id='github'
							placeholder='Your github Url'
							{...register('github', { required: true })}
							className='bg-transparent border border-b-gray-400'
						></input>
						{errors.github && (
							<span className='text-red-400'>This field is required</span>
						)}
					</div>

					<button
						type='submit'
						onClick={generateHtmlFile}
						className='bg-blue-400 rounded-lg p-3'
					>
						Generate QRCode
					</button>
					{linkURL}
				</form>
				{htmlBlobUrl && (
					<div className='flex flex-col m-10 gap-2'>
						<QRCode value={linkURL} />
						<button
							title='Copy to clipboard'
							className='bg-green-400 rounded-lg text-green-900 font-semibold p-3'
							onClick={() => {
								navigator.clipboard.writeText(linkURL);
							}}
						>
							Copiar URL
						</button>
						<a
							href={htmlBlobUrl}
							title='Download'
							download={formData.name}
							className='bg-green-400 rounded-lg text-green-900 font-semibold p-3 text-center'
						>
							Download profile page
						</a>
						<Link
							className='bg-green-400 rounded-lg text-green-900 font-semibold p-3 text-center'
							to={`/profile/${formData.name}/${formData.linkedin}/${formData.github}`}
						>
							Open in new Page
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}

export default Home;
