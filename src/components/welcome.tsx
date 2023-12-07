import Link from 'next/link';

export default function Welcome() {
	return (
		<section 
			className="flex flex-col min-w-full min-h-fit items-start justify-start md:items-center md:justify-start p-6 md:p-24"
			style={{
				background: 'radial-gradient(circle, rgba(0,118,109,1) 0%, rgba(0,85,80,1) 100%)'
			}}
		>
			<div className="flex flex-col items-center">
				<p
					className="text-2xl text-light1 drop-shadow-lg md:text-center mb-4"
				>Bem vindo a</p>
				<h2	
					className="text-9xl md:text-9xl text-light1 md:text-center mb-4  drop-shadow-xl"
				>
					SOMNUM
				</h2>
				<p 
					className="text-2xl text-light1 md:text-center place-self-end drop-shadow-xl"
				>
					Anestesia e alívio da dor
				</p>
			</div>

			<div className="flex flex-row flex-wrap my-8 justify-center">
				<Link className="bg-dark2 text-darker px-6 py-4 rounded-2xl mr-2 m-2 "  href="/contato">Entre em contato</Link>
				<Link className="bg-light1 text-dark2 px-6 py-4 rounded-2xl mr-2 m-2"  href="#about">Saiba mais</Link>
			</div>
		</section>
	);
}