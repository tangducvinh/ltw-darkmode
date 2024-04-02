import { useSpring, animated } from 'react-spring'

import { IoPerson, IoCard } from "react-icons/io5"
import check from '../assets/desktop/check.svg'

const Information = () => {
    const customer = useSpring({customers: 10245, from: {customers: 0}})
    const card = useSpring({cards: 12045, from: {cards: 0}})

    return (
        <section className="px-[130px] flex mt-10 max-sm:flex-col max-sm:px-[0px]">
            <div className="flex dark:text-white flex-col items-center py-[60px] w-[300px] gap-7 bg-gradient-to-b from-purple-400 to-transparent shadow-lg rounded-[20px] max-sm:w-[70%] max-sm:mx-auto text-black">
                <div className="flex items-center gap-7">
                    <IoPerson size='30px'/>
                    <div>
                        <p className="text-[30px] font-bold">
                            <animated.div>{customer.customers.to(val => Math.floor(val))}</animated.div>
                        </p>
                        <p className="text-[22px] font-semibold">Customers</p>
                    </div>
                </div>

                <div className="flex items-center gap-7">
                    <IoCard size='30px'/>
                    <div>
                        <p className="text-[30px] font-bold">
                            <animated.div>{card.cards.to(val => Math.floor(val))}</animated.div>
                        </p>
                        <p className="text-[22px] font-semibold">Cards Issued</p>
                    </div>
                </div>
            </div>

            <div className="ml-[30%] w-[40%] flex flex-col justify-between max-sm:mt-[60px] max-sm:w-[80%] max-sm:mx-auto max-sm:gap-7 dark:text-white text-black font-medium">
                <div className="flex items-center gap-7">
                    <img src={check}></img>
                    <p className="text-[18px] max-sm:text-[16px]">Card reports sent to your phone every weeks</p>
                </div>

                <div className="flex items-center gap-7">
                    <img src={check}></img>
                    <p className="text-[18px] max-sm:text-[16px]">No external fees</p>
                </div>

                <div className="flex items-center gap-7">
                    <img src={check}></img>
                    <p className="text-[18px] max-sm:text-[16px]">Set spending limits and restrictions</p>
                </div>
            </div>
        </section>
    )
}

export default Information