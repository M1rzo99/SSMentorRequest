import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function AccessDenied() {
	return (
		<>
			<div className='container'>
				<h1 className='bungee-spice-regular'>Access Denied!</h1>
				<p>
					<a
						className='link_txtDec bgColor'
						href='/api/auth/signin'
						onClick={e => {
							e.preventDefault()
							signIn()
						}}
					>
						<span className='linka '>
							You must be signed in to view this page
						</span>
					</a>
				</p>
			</div>

			<style jsx>{`
				.bungee-spice-regular {
					font-family: 'Bungee Spice', sans-serif;
					font-weight: 400;
					font-style: normal;
				}
				.link_txtDec {
					text-decoration: none;
				}

				.linka {
					border: solid 2px #ff6c0c;
					border-radius: 8px;
					text-decoration: none;
					cursor: pointer;
					color: #ddf4e7;
					font-size: 25px;
					font-weight: 700;
					padding: 10px 20px;
				}

				.container {
					display: flex;
					flex-direction: column; /* vertikal joylashuv */
					justify-content: center; /* vertical o‘rtaga */
					align-items: center; /* horizontal o‘rtaga */
					height: 80vh; /* butun ekran bo‘ylab */
					text-align: center; /* matnni markazga tekislaydi */
				}
			`}</style>
		</>
	)
}
