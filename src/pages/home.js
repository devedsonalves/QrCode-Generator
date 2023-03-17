import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Home() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const current = window.location.href;
	const [formData, setFormData] = useState('');
	const linkURL =
		current +
		`profile/${formData.name}/${formData.linkedin}/${formData.github}`;

	const onSubmit = (data) => {
		setFormData(data);
	};

	return (
		<section className='flex justify-center'>
			<div className='m-10 rounded-lg flex flex-col w-fit h-fit items-center'>
				<h1 className='font-bold text-2xl'>QR Code Generator</h1>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center gap-5 p-10'
				>
					<div>
						<label htmlFor='name' className='bg-gray-200 rounded-l-lg p-2'>
							Name
						</label>
						<input
							id='name'
							placeholder='Your unique name'
							{...register('name', { required: true })}
							className='bg-transparent border p-1'
						></input>
						{errors.name && (
							<span className='text-red-400'>This field is required</span>
						)}
					</div>

					<div>
						<label htmlFor='linkedin' className=' bg-gray-200 rounded-l-lg p-2'>
							Linkedin Username
						</label>
						<input
							id='linkedin'
							placeholder='Your linkedin username'
							{...register('linkedin', { required: true })}
							className='bg-transparent border p-1'
						></input>
						{errors.linkedin && (
							<span className='text-red-400'>This field is required</span>
						)}
					</div>

					<div>
						<label htmlFor='github' className='bg-gray-200 rounded-l-lg p-2'>
							Github Username
						</label>
						<input
							id='github'
							placeholder='Your github username'
							{...register('github', { required: true })}
							className='bg-transparent border p-1'
						></input>
						{errors.github && (
							<span className='text-red-400'>This field is required</span>
						)}
					</div>

					<button type='submit' className='bg-blue-400 rounded-lg p-3'>
						Generate QRCode
					</button>
				</form>
			</div>
			{formData && (
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
					<Link
						className='bg-green-400 rounded-lg text-green-900 font-semibold p-3 text-center'
						to={`/profile/${formData.name}/${formData.linkedin}/${formData.github}`}
					>
						Open in new Page
					</Link>
				</div>
			)}
		</section>
	);
}

export default Home;
