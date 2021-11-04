import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>404 page</title>
				<meta name="description" content="404 page from devChallenges" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.head}>
				<p>404 NOT FOUND</p>
			</div>
			<main className={styles.main}>
				<div className={styles.section}>
					<div className={styles.image}>
						<img src="Scarecrow.png" alt="Scarecrow" />
					</div>
					<div className={styles.copy}>
						<h1>I have bad news for you</h1>
						<p>
							The page you are looking for might be removed or is temporarily
							unavailable
						</p>
						<button>BACK TO HOMEPAGE</button>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				<p>
					created by <a href="https://github.com/Matt-htims">Matt-htims</a> -
					devChallenges.io
				</p>
			</footer>
		</div>
	);
}
