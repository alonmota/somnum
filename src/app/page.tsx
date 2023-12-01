import { APP_NAME } from '@/constants/values';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<header className="flex min-w-full justify-evenly p-4 bg-light text-darker">
				<h1 className="items-stretch basis-1/4 font-sans text-lg font-semibold hover:text-dark">
					{APP_NAME}
				</h1>
				<nav className="items-stretch basis-1/4">
					<ul className="flex flex-row  min-w-full justify-evenly">
						<li>
							<a className="hover:text-dark" href="#">
								Página inicial
							</a>
						</li>
						<li>
							<a className="hover:text-dark" href="#">
								Sobre
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<section className="flex min-w-full flex-col min-h-screen items-center justify-evenly">
				<h2 className="text-6xl text-neutral">Bem vindo a SOMNUM</h2>
				<p className="text-2xl text-neutral">Modulação de dor e Anestesia</p>

				<div>
					<button className="bg-light text-darker p-4 rounded-3xl m-2">
						Entre em contato
					</button>
					<button className="bg-darker text-light p-4 rounded-3xl m-2">
						Saiba mais
					</button>
				</div>
			</section>

			<section className="flex min-h-screen min-w-full flex-col items-center justify-evenly bg-light text-darker">
				<h2 className="text-6xl">O que fazemos</h2>

				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Neuroplasticidade Adaptativa:{' '}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Contribui para uma redução sustentável da dor a longo prazo
						</p>
					</a>

					<a
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Individualização do Tratamento{' '}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Cada paciente é único, e nosso serviço reconhece essa
							singularidade ao oferecer uma abordagem personalizada.
						</p>
					</a>

					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Redução da Dor Crônica:{' '}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Prevenção da dor crônica, oferecendo uma alternativa avançada e
							duradoura aos métodos convencionais
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Minimização de Efeitos Colaterais{' '}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							A utilização de técnicas multimodais permite reduzir a dose dos
							fármacos, minimizando os efeitos colaterais
						</p>
					</a>
				</div>
			</section>

			<section className="flex min-h-screen min-w-full flex-row items-center justify-evenly">
				<h2 className="text-6xl">Onde atuamos</h2>
			</section>

			<section className="flex min-w-full flex-row items-center justify-evenly bg-light text-darker">
				Links
			</section>

			<footer className="flex min-w-full flex-row items-center justify-evenly">
				end
			</footer>
		</main>
	);
}
