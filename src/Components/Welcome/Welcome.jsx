import React from 'react'
import HomeImg from '../../assets/img/home.png'
import EventImg from '../../assets/img/event.png'
import DaysImg from '../../assets/img/days.png'
import StudentImg from '../../assets/img/student.png'

const Welcome = () => {
    return (
        <>
            <div className='mx-auto py-4 lg:py-14 bg-white lg:mx-20 h-screen'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col md:flex-row w-3/4'>
                        {/* contant section */}
                        <section className='w-full md:w-3/5 flex justify-center items-center'>
                            <div className='w-3/4 hidden md:block'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Soluta et ratione illo quibusdam dolorum magni quaerat
                                    velit quis perspiciatis molestiae neque tempore nam iste
                                    vitae maxime earum, animi consequatur corporis at voluptate
                                    laboriosam odio nisi hic quas? Suscipit, ipsam fuga, rerum commodi
                                    velit quis perspiciatis molestiae neque tempore nam iste
                                    vitae maxime earum, animi consequatur corporis at voluptate
                                </p>
                            </div>
                        </section >
                        {/* image section */}
                        <section className='w-full md:w-2/5 flex justify-center items-center'>
                            <div>
                                <img src={HomeImg} alt="" className='w-48' />
                            </div>
                        </section>
                    </div>
                </div>
                {/* Footer section */}
                <div className='flex justify-center items-center mt-14'>
                    <div className='bg-secondery w-full md:w-3/4 h-[400px] md:h-48 rounded-t-[71px]  md:rounded-[61px] mt-20 flex justify-center items-center flex-col md:flex-row gap-8'>
                        <div className=' grid grid-cols-2 md:grid-cols-2 gap-8'>
                            <div className="flex flex-col md:flex-row justify-center md:justify-end items-center">
                                <div className="w-20 h-20 bg-primary rounded-full overflow-hidden">
                                    <img src={DaysImg} alt="" className="w-full h-full object-cover p-5" />
                                </div>
                                <div className='leading-tight m-3 flex flex-row md:flex-col'>
                                    <h1 className='text-xl md:text-2xl font-semibold leading-none'>04</h1>
                                    <h1 className='text-xl md:text-2xl font-semibold uppercase leading-none'>Days</h1>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="w-20 h-20 bg-primary rounded-full overflow-hidden">
                                    <img src={EventImg} alt="" className="w-full h-full object-cover p-5" />
                                </div>
                                <div className='leading-tight m-3 flex flex-row md:flex-col'>
                                    <h1 className='text-xl md:text-2xl font-semibold leading-none'>100</h1>
                                    <h1 className='text-xl md:text-2xl font-semibold uppercase leading-none'>Events</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row justify-start items-center">
                                <div className="w-20 h-20 bg-primary rounded-full overflow-hidden">
                                    <img src={StudentImg} alt="" className="w-full h-full object-cover p-5" />
                                </div>
                                <div className='leading-tight m-3 flex flex-row md:flex-col'>
                                    <h1 className='text-xl md:text-2xl font-semibold leading-none'>1300+</h1>
                                    <h1 className='text-xl md:text-2xl font-semibold uppercase leading-none'>Students</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
