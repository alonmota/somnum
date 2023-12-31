'use client'

import { APP_NAME } from '@/constants/values';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname()
	const routes = [
		{ path: '/', name: 'Página inicial' },
		{ path: '/contato', name: 'Contato' }
	]
	return (
		<main className="flex min-h-screen w-screen flex-col items-start md:items-stretch justify-start md:justify-between">
			<header className="flex flex-row w-screen justify-start md:justify-evenly p-4 bg-light1 text-dark2">
				<h1 className="basis-1/4 font-sans text-lg font-semibold hover:text-dark2">
					{APP_NAME}
				</h1>
				<nav className="items-stretch basis-1/4 hidden md:flex">
					<ul className="flex flex-row min-w-full justify-evenly">
						{
							routes.map(route => <li key={route.path}>
								<Link className={`${isPathActive(route.path)} mr-4 hover:underline whitespace-nowrap`}  href={route.path}>{route.name}</Link>
							</li>)
						}
					</ul>
				</nav>
			</header>

			{children}
			
			<section className="flex min-w-full flex-col items-start py-2 px-4 md:px-24 justify-evenly bg-dark2 text-light1 text-sm"
				style={{
					background: 'radial-gradient(circle, rgba(0,118,109,1) 0%, rgba(0,85,80,1) 100%)'
				}}
			>
				<h3 className='font-bold'>Nossas Redes Sociais</h3>
				<div className='flex flex-row flex-wrap'>
					<a className='flex flex-row items-center pr-8 py-2' href="https://www.instagram.com/anestesiasomnum" target='_blank'> <FaInstagram /> <p className='ml-1'>@anestesiasomnum</p> </a>
					<a className='flex flex-row items-center pr-8 py-2' href="https://www.instagram.com/anestesiasomnum" target='_blank'> <FaWhatsapp /> <p className='ml-1'>{'(61) 98188-8886'}</p> </a>
				</div>
			</section>

			<footer className="flex min-w-full flex-row flex-wrap items-start justify-start px-24 py-2 text-sm bg-gray-200 text-dark2">
				© SOMNUM
			</footer>
		</main>
	);
	
	function isPathActive(path: string): string {
		return `link ${pathname === path ? 'font-bold' : ''}`
	}
}
