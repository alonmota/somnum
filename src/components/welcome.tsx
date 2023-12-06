import Link from 'next/link';

export default function Welcome() {
	return (
		<section 
			className="flex flex-col min-w-full min-h-fit items-start justify-start md:items-center md:justify-start p-6 md:p-24"
			style={{
				backgroundImage: `url('/pexels-karolina-grabowska-5207103.jpg')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="flex flex-col items-center">
				<h2
					className="text-5xl md:text-6xl text-light1 md:text-center"
					style={{
						textShadow: '2px 2px #2a180e'
					}}
				>
					Bem vindo a SOMNUM
				</h2>
				<p 
					className="text-2xl text-light1 drop-shadow-lg md:text-center"
					style={{
						textShadow: '2px 2px #2a180e'
					}}
				>
					Serviço de anestesia a domicílio
				</p>
			</div>

			<div className="flex flex-row flex-wrap my-8 justify-center">
				<Link className="bg-dark2 text-light1 px-6 py-4 rounded-2xl mr-2 m-2"  href="/contato">Entre em contato</Link>
				<Link className="bg-light1 text-dark2 px-6 py-4 rounded-2xl mr-2 m-2"  href="#about">Saiba mais</Link>
			</div>
		</section>
	);
}