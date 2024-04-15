import React from 'react'

export default function Home() {
    const cardData = [
        {
            id: '1',
            imgSrc: './assets/feature-five-icon1.PNG',
            title: 'Exclusive Courses',
            discription: ' Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore',
            btn: 'READ MORE'
        },
        {
            id: '2',
            imgSrc: './assets/feature-five-icon2.PNG',
            title: 'Creative Advisors',
            discription: ' Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore',
            btn: 'READ MORE'
        },
        {
            id: '3',
            imgSrc: './assets/feature-five-icon3.PNG',
            title: 'Exclusive Courses',
            discription: ' Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore',
            btn: 'READ MORE'
        },
        {
            id: '4',
            imgSrc: './assets/feature-five-icon4.PNG',
            title: 'Exclusive Courses',
            discription: ' Sit amet consectetur adiisc elit sed dseiusmod temorse incididunt labore dolore',
            btn: 'READ MORE'
        },
    ]

    return (
        <>
            <div className="flex md:flex-row flex-col   bg-gray-100">
                <div className="md:w-1/2 m-16 mb-0">
                    <img src='./assets/hero-three-man.png' />

                </div>
                <div className="md:w-1/2 md:p-12 p-5 md:mt-12 ">
                    <p className='text-3xl font-bold'><span className='text-blue-500 text-4xl'>2563+</span> Students</p>
                    <p className='md:text-7xl text-5xl font-bold text-[#262D3D] mt-5'>We’re Best Online <br /> Education  Partners <br /> University 2022</p>

                    <div className='mt-10 flex '>
                        <p className='text-blue-500 text-3xl'><i className="bi bi-patch-check-fill"></i>
                            <span className='ms-5 text-2xl text-gray-600 font-medium'>Experts Advisors</span>
                        </p>

                        <p className='text-blue-500 text-3xl ms-5'><i className="bi bi-patch-check-fill"></i>
                            <span className='ms-5 text-2xl text-gray-600 font-medium'>538+ Courses</span>
                        </p>
                    </div>

                    <div className='flex mt-10 md:flex-row flex-col'>
                        <button type="button" className="focus:outline-none text-white bg-[#00CC83]  hover:bg-[#204ECF] font-medium rounded-lg text-sm px-32 py-4 me-2 mb-2 ">GET STARTED</button>

                        <button type="button" className="focus:outline-none text-white bg-[#204ECF] 
                        hover:bg-[#00CC83] focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-32 py-4 me-2 mb-2 ">OUR COURSES</button>
                    </div>
                </div>
            </div>
            <div className='bg-white p-16 mb-0'>
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-1/2 ">
                        <p className='text-2xl font-medium text-blue-700'>Why Learn Us</p>
                        <p className='text-6xl font-medium mt-5'>Experience To Online Learning Center</p>
                    </div>
                    <div className="md:w-1/2 mt-10 text-gray-500">
                        <p className='text-2xl'>Sit amet consectetur adipiscing sed eiusmod tempor indunt ut labore et dolore magna aliquaes ipsum suspendisse ultrice gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis dolorem fugiat voluptas nulla pariatur.</p>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col mt-10'>

                    {cardData.map((item, index) => (
                        <>
                            <div key={index} className="block mt-10 md:w-1/2 ms-5 bg-white border border-gray-200 rounded-sm hover:shadow-2xl ">

                                <img src={item.imgSrc} className='p-5' />
                                <p className='text-2xl font-bold  ms-5 '>{item.title}</p>
                                <p className='text-xl   mt-5 ms-5 mb-10 '>
                                    {item.discription}
                                </p>
                                <hr className='mt-3' />
                                <button type="button" className="focus:outline-none  text-xl  font-bold text-blue-500 hover:text-white hover:bg-[#00CC83]   text-sm bg-transparent p-4 w-full  ">{item.btn}</button>
                            </div>
                        </>
                    ))}
                </div>


                <div>
                    <div className="flex md:flex-row flex-col mt-28">
                        <div className="md:w-1/2 ">
                            <p className='text-2xl font-medium text-blue-700'>About Wellearn</p>
                            <p className='text-5xl font-medium mt-5 '>Know Something <br /> About Our Programs <br /> Culture At Wellearn</p>

                            <p className='text-xl mt-10 w-3/4' >Sit amet consectetur adipiscing sed eiusmod tempor indunt ut labore et dolore magna aliquaes ipsum suspendisse ultrice gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis dolorem fugiat voluptas nulla pariatur.</p>

                            <p className='text-2xl font-bold mt-5'>Best Instructor & Best Programs</p>
                            <p className='text-2xl font-bold mt-5'>100% ISO Certified Gruentee</p>
                            
                            <button className='btn btn-default w-2/3 mt-5'>LEARN MORE</button>
                        </div>
                        <div className="md:w-1/2 mt-10 text-gray-500">
                            <div className='flex justify-end items-ends'>
                                <img src='./assets/about-four1.jpg' />
                            </div>
                            <div className='flex justify-start items-start'>
                                <img src='./assets/about-four2.jpg' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
