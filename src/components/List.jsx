import { list } from '@/constants/List'
import React from 'react'

export default function List() {
    return (
        <section className='text-center mt-5 flex flex-col gap-2 mb-4'>
            {
                list.map((list, i) => (
                    <article key={i} className='bg-white flex gap-2 flex-col py-2'>
                        <h2 className='font-bold text-xl px-2'> {list?.heading}</h2>
                        <p className='px-2 text-gray-500'>{list?.description}</p>
                    </article>
                ))
            }

            <p className='bg-white py-8 text-xl px-2 font-bold'>The people of Montana wake up – this <strong>IS</strong> the time to vote for the right person irrespective of your party or belief.</p>
        </section>
    )
}
