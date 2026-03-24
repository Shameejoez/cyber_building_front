import { useState, type MouseEvent } from "react"
import Arrow from "../../../public/images/icons/buttons/accordArrow.svg?react"

type AccordionProps = {
    
}

export const Accordion = ({}: AccordionProps) => {

    const [isOpen, setOpen] = useState(false)
    const [isActive, setActive] = useState<string[]>([])
    const openAccodion = () => setOpen(!isOpen)
    
    /* добавляем и удаляем активные аккордеоны */
    const onClickSetActive = (nameLi: string) => {
       setActive((prev) => prev.includes(nameLi) ? prev.filter((el) => el !== nameLi) : [...prev, nameLi])
    }
    /*включаем ховеры активных Аккордеонов */
    const onClickAccordion = (e:MouseEvent<HTMLButtonElement>) => {
        const dataText = e.currentTarget.getAttribute('data-text')
        dataText && onClickSetActive(dataText)
        openAccodion()
    }

    return (
        <div className="">
            <button className={`flex gap-25 pl-10 ${isActive.includes('Персонал') ? 'bg-blue-400' : 'bg-white'}`} data-text='Персонал' onClick={(e: MouseEvent<HTMLButtonElement>) => onClickAccordion(e)}>
                <span className="whitespace-nowrap text-center">Персонал</span>
                <Arrow className={`w-7 h-7 transition-all duration-100 ${isOpen ? '-rotate-90' : 'rotate-90'}`}/>
            </button>
            <ul className={`w-full mx-auto overflow-hidden transition-all  duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <li className={`pb-2 border-b-1 border-b-red-800 pl-20 transition-all  duration-300 ${isOpen ? 'translate-x-0' : '-translate-y-20'}`}>Новый сотрудник</li>
                <li className={`pb-2 border-b-1 border-b-red-800 pl-20 transition-all  duration-300 ${isOpen ? 'translate-x-0' : '-translate-y-20'}`}>Поиск</li>
         {/*    <li className={`pb-2 border-b-1 border-b-red-800 pl-20 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-y-20'}`}></li> */}
            </ul>
        </div>
       
    )
}
