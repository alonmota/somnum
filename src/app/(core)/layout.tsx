'use client'

import { APP_NAME } from '@/constants/values';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
		<main className="flex min-h-screen flex-col items-center justify-between">
			<header className="flex min-w-full justify-evenly p-4 bg-light1 text-dark1">
				<h1 className="items-stretch basis-1/4 font-sans text-lg font-semibold hover:text-dark1">
					{APP_NAME}
				</h1>
				<nav className="items-stretch basis-1/4">
					<ul className="flex flex-row  min-w-full justify-evenly">
						{
							routes.map(route => <li key={route.path}>
								<Link className={`${isPathActive(route.path)} hover:underline`}  href={route.path}>{route.name}</Link>
							</li>)
						}
					</ul>
				</nav>
			</header>

			{children}
			
			<section className="flex min-w-full flex-row items-center justify-evenly bg-light1 text-darker">
				Links
			</section>

			<footer className="flex min-w-full flex-row items-center justify-evenly">
				end
			</footer>
		</main>
	);
	
	function isPathActive(path: string): string {
		return `link ${pathname === path ? 'font-bold' : ''}`
	}
}
