import { AddUser } from "../components/Forms/AddUser"


export const WorkTable = () => {
    return (
        <div className="w-full py-10 h-full bg-[#f4f4f4] ">
            
            <h1 className="ml-32 text-5xl font-bold text-gray-500">Dashboard</h1>
            {/* Карточки дашборда */}
            <ul className="dashboard_header">
                <li className="dashboard_task">
                    <article>   
                        <h2 className="visually-hidden">Карточка задачи</h2>
                        <p className="task_description"></p>
                    </article>
                </li>
            </ul>
            {/* Детали по выбранной карточке */}
            <section className="dashboard_details relative h-full">
             
                    <AddUser/>
           
                
                <h2 className="visually-hidden">Детали задачи</h2>
                <p className="details_text"></p>
            </section>
        </div>
    )
}