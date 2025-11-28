import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import dbConnect from '../util/mongodb'

export default function Home() {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const saved = localStorage.getItem('theme')
		if (saved) setTheme(saved)
	}, [])

	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<div className='container'>
			<Head>
				<title>Summoner School Mentor Requests</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					href='https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<main>
				<img
					src='/download.jpg'
					alt='Summoner School'
					className='header-image'
				/>
				<h1 className='title'>
					Welcome to{' '}
					<a
						className='aHref bungee-spice-regular'
						href='https://discord.gg/summonerschool'
					>
						Summoner School
					</a>{' '}
					Discord Mentor Request Site
				</h1>

				<div className='grid'>
					<Link href='/request' className='link'>
						<div className='card'>
							<h3>Make a new request &rarr;</h3>
							<p className='title bungee-spice-regular'>
								Fill out a ne mentor request{' '}
							</p>
						</div>
					</Link>
					<Link href='/apply' className='link'>
						<div className='card'>
							<h3>Become Mentor&rarr;</h3>
							<p className='title bungee-spice-regular'>
								Join the Summoner School team
							</p>
						</div>
					</Link>
					<Link href='/mentors' className='link'>
						<div className='card'>
							<h3>Mentor list &rarr;</h3>
							<p className='title bungee-spice-regular'>
								See the mentoring team
							</p>
						</div>
					</Link>
				</div>
			</main>

			<style>{`
        :root {

          --bg: #ffffff;
          --text: #000000;
          --card-bg: #ffffff;
          --card-border: #eaeaea;
        }
        .dark {
          --bg: #0d1117;
          --text: #e6edf3;
          --card-bg: #161b22;
          --card-border: #30363d;
        }

        body, html {
          background: var(--bg);
          color: var(--text);
          transition: background 0.3s ease, color 0.3s ease;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .theme-toggle {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 10px 15px;
          border-radius: 10px;
          cursor: pointer;
        }



        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


          }


        .title a:hover {
          color: #fff;
          text-decoration: none;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
          transition: 0.2s ease;
          width:280px;
        }

        .card:hover {
          border-color: #0070f3;
          transform: translateY(-5px);
        }
          .card h3,p{
              color:white;
                text-decoration: none;}

              .link{ text-decoration: none;}

    a{ text-decoration: none;}

    .aHref {
  font-size: 40px;
  transition: font-size 0.3s ease;
}

.header-image {
  width: 200px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}



      `}</style>
		</div>
	)
}

export async function getStaticProps() {
	await dbConnect()
	return { props: {} }
}
