import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { APP_DESCRIPTION, APP_NAME } from '@/constants/values';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: APP_NAME,
	description: APP_DESCRIPTION,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
