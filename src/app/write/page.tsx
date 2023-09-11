'use client'

import React, { useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import { external, image, plus, video } from '../../../public'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

type Props = {}

const WritePage = (props: Props) => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState('')

	const handleSubmit = () => {}

	return (
		<div className={styles.container}>
			<input type='text' placeholder='Title' className={styles.input} />
			<select className={styles.select}>
				<option value='style'>Style</option>
				<option value='fashion'>Fashion</option>
				<option value='food'>Food</option>
				<option value='culture'>Culture</option>
				<option value='travel'>Travel</option>
				<option value='coding'>Coding</option>
			</select>

			<div className={styles.editor}>
				<button className={styles.button} onClick={() => setOpen(!open)}>
					<Image src={plus} alt='plus sign' width={16} height={16} />
				</button>
				{open && (
					<div className={styles.add}>
						<input type='file' id='image' style={{ display: 'none' }} />
						<button className={styles.addButton}>
							<label htmlFor='image'>
								<Image src={image} alt='image' width={16} height={16} />
							</label>
						</button>
						<button className={styles.addButton}>
							<Image src={external} alt='' width={16} height={16} />
						</button>
						<button className={styles.addButton}>
							<Image src={video} alt='' width={16} height={16} />
						</button>
					</div>
				)}
				<ReactQuill
					className={styles.textArea}
					theme='bubble'
					value={value}
					onChange={setValue}
					placeholder='Tell your story...'
				/>
			</div>
			<button className={styles.publish} onClick={handleSubmit}>
				Publish
			</button>
		</div>
	)
}

export default WritePage
