import { useState } from 'react';

const Formulario = () => {
	const [form, setForm] = useState({});
	const [formError, setFormError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			Object.keys(form).length === 0 ||
			form.email === '' ||
			form.fullname === ''
		) {
			setFormError('Por favor, llene todos los campos');
			return;
		}

		const data = new FormData(e.target);

		const url = 'https://psicologaberenicebastidas.activehosted.com/proc.php';

		fetch(url, {
			method: 'POST',
			body: data,
			mode: 'no-cors',
		})
			.then((response) => {
				setTimeout(() => {
					setFormError('');
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 mx-4 md:mx-24 mt-4 md:mt-12"
		>
			<input type="hidden" name="u" value="39" />
			<input type="hidden" name="f" value="39" />
			<input type="hidden" name="s" />
			<input type="hidden" name="c" value="0" />
			<input type="hidden" name="m" value="0" />
			<input type="hidden" name="act" value="sub" />
			<input type="hidden" name="v" value="2" />
			<input type="hidden" name="or" value="92ffc03067285b93961e1fb80bcae25d" />

			<input
				type="text"
				name="fullname"
				placeholder="Nombre completo"
				className="border border-gray-400 appearance-none rounded w-full px-3 py-3   focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 "
				onChange={handleChange}
			/>

			<input
				type="email"
				name="email"
				placeholder="Correo electrónico"
				className="border border-gray-400 appearance-none rounded w-full px-3 py-3   focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 "
				onChange={handleChange}
			/>

			<button
				type="submit"
				className="px-8 bg-secondary h-14 bg-blue-600 text-white rounded-lg mx-auto"
			>
				Enviar
			</button>

			<p className="mt-4 text-center text-xl font-bold">{formError}</p>
		</form>
	);
};
export default Formulario;
