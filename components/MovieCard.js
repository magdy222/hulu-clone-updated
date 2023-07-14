import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef } from 'react'

const MovieCard = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <Link href={`/movie/${result.id}`}>
    <div ref={ref} className='p2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 my-2'>
      <div className='relative'>
        <Image
          layout='responsive'
          width={1920}
          height={1080}
          src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        />
        <div className='absolute inset-0 flex items-center justify-center opacity-0
         transition-opacity duration-300 bg-black bg-opacity-50'>
          <button className='text-xl p-2
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ring-2 ring-green-500 ring-offset-2
           focus:outline-none focus:ring-2 focus:ring-green-500'>Watch</button>
        </div>
      </div>
      <div className='flex'>
        <div>
          <p className='truncate max-w-md'>{result.overview}</p>
          <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold '>
            {result.title || result.original_name}
          </h2>
          <p className='flex items-center opacity-0 group-hover:opacity-100 '>
            <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
          </p>
        </div>
      </div>
      <style jsx>{`
        .relative:hover .absolute {
          opacity: 1;
        }
      `}</style>
    </div>
    </Link>
  )
})

export default MovieCard