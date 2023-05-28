import React from 'react'
import styles from '../style'
import { clients } from '../constants'

export default function Clients() {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexStart} flex-wrap w-full`}>
				{clients.map((client) => (
					<div key={client.id}
						className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
							<img src={client.logo} alt="client" 
								className='sm:w-[192px] max-h-[37px] w-[100px] object-contain'/>
						</div>
				))}
			</div>
		</section>
	)
}
