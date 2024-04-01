

import isocard from '../assets/desktop/isocard.svg'

const Content = () => {
    return (
        <section className='grid grid-cols-3 mt-10 max-sm:flex max-sm:flex-col'>
            <div className='grid-span-1 col-start-2 text-[40px] text-center my-auto font-bold dark:text-white text-black max-sm:mb-10'>
                <p>Earn <span className='text-purple-500'>More</span></p>
                <p>Pay Less</p>
                <button className='text-[20px] px-8 py-2 bg-purple-600 rounded-[10px] mt-2 text-white'>Start</button>
            </div>

            <img className='grid-span-1' src={isocard} alt='cart'></img>
        </section>
    )
}

export default Content