import Link from 'next/link';

export default function Welcome() {
	return (
		<section 
			className="flex flex-col min-w-full min-h-screen items-center justify-center p-24"
			style={{
				backgroundImage: `url('/pexels-karolina-grabowska-5207103.jpg')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="flex flex-col items-center">
				<h2
					className="text-6xl text-light1"
					style={{
						textShadow: '2px 2px #2a180e'
					}}
				>
					Bem vindo a SOMNUM
				</h2>
				<p 
					className="text-2xl text-light1 drop-shadow-lg"
					style={{
						textShadow: '2px 2px #2a180e'
					}}
				>
					Serviço de anestesia a domicílio
				</p>
			</div>

			<div className="mt-12">
				<Link className="bg-dark2 text-light1 p-4 rounded-2xl m-2"  href="/contato">Entre em contato</Link>
				<Link className="bg-light1 text-dark2 p-4 rounded-2xl m-2"  href="#about">Saiba mais</Link>
			</div>
		</section>
	);
}