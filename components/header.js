import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { getCleanedDiscordUser } from '../util/helper'
import styles from './header.module.css'

export default function Header() {
	const { data: session, status } = useSession()
	const loading = status === 'loading'

	return (
		<header>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<noscript>
				<style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
			</noscript>

			<div className={styles.signedInStatus}>
				<p
					className={`nojs-show ${
						!session && loading ? styles.loading : styles.loaded
					}`}
				>
					{!session && (
						<>
							<span className='bungee-spice-regular'>
								You are not signed in!
							</span>
							<a
								href={`/api/auth/signin`}
								className={styles.buttonPrimary}
								onClick={e => {
									e.preventDefault()
									signIn()
								}}
							>
								Sign in
							</a>
						</>
					)}
					{session && (
						<>
							{session.user.image && (
								<span
									style={{ backgroundImage: `url(${session.user.image})` }}
									className={styles.avatar}
								/>
							)}
							<span className={styles.signedInText}>
								<small>Signed in as</small>
								<br />
								<strong>{getCleanedDiscordUser(session.user)}</strong>
							</span>
							<a
								href={`/api/auth/signout`}
								className={styles.buttonPrimary}
								onClick={e => {
									e.preventDefault()
									signOut()
								}}
							>
								Sign out
							</a>
						</>
					)}
				</p>

				<style jsx>{`
					.bungee-spice-regular {
						font-family: 'Bungee Spice', sans-serif;
						font-weight: 400;
						font-style: normal;
					}
				`}</style>
			</div>
		</header>
	)
}
