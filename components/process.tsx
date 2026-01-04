import { cn } from '@/lib/utils'
import { Color } from 'motion/react'
import React from 'react'
// import { SlideUp } from '@/components/animations/slide-up'
import SlideUp from './animations/slide-up'

interface Info {
    title: string,
    num: number,
    bgColor: string,
    position: string
}

function WorkFlow({ title, num, bgColor, position }: Info) {
    return (
        <div className='relative flex h-14 w-full items-center md:h-22 '>
            <div className='absolute left-1/2 h-14 w-screen -translate-x-1/2 md:h-22 bg-sky-200' />
            <div className={cn('absolute left-1/2 h-14 w-screen -translate-x-1/2 md:h-22 ', bgColor)} />
            <div className='relative z-10 flex items-center gap-2 md:pl-50'>
                <svg
                    color='white'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinejoin='round'
                    className='lucide lucide-arrow-down md:size-12 dark:invert'
                    aria-hidden="true"
                >
                    <path d='M12 5v14' />
                    <path d='m19 12-7 7-7-7' />

                </svg>
                <h3 className='text-3xl font-medium tracking-tight md:text-5xl text-white uppercase dark:invert'>{title}</h3>
            </div>
            <span className={cn('absolute -bottom-1 font-antonio text-5xl font-semibold tracking-tighter text-white md:-bottom-3 text-white dark:invert', position)}>000{num}</span>

        </div >
    )
}


export default function Process() {
    return (
        <>
            <div className="text-center">
                <h2 className="text-balance text-4xl font-semibold lg:text-5xl ">Our Process to Success</h2>
                <p className="mt-4 ml-30 mr-30 flex justify-center pb-10  ">Risk is always scary, but with us we can ensure to always have a Process to take into action
                </p>
            </div>

            <SlideUp time={0.3}>
                <WorkFlow title='Identify' num={1} bgColor={'bg-gray-300'} position={' md:text-8xl left-[40%] lg:left-[40%]'} />

            </SlideUp>
            <SlideUp time={0.4}>
                <WorkFlow title='Expand' num={2} bgColor={'bg-gray-400'} position={' md:text-8xl left-[50%] lg:left-[50%]'} />

            </SlideUp>
            <SlideUp time={0.5}>
                <WorkFlow title='Engage' num={3} bgColor={'bg-gray-500'} position={' md:text-8xl left-[60%] lg:left-[60%]'} />
            </SlideUp>

            <SlideUp time={0.6}>

                <WorkFlow title='Convert' num={4} bgColor={'bg-gray-600'} position={' md:text-8xl left-[70%] lg:left-[70%]'} />
            </SlideUp>


        </>





    )
}


