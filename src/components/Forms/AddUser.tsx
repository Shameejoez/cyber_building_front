import Closed from "../../../public/images/icons/buttons/closedBtn.svg?react"

type AddUserProps = {
    
}

export const AddUser = ({}: AddUserProps) => {
    
    return (
            <form action="" className="absolute px-8 py-4 bg-gray-300 top-1/2 left-1/2 rounded-2xl transform -translate-x-1/2 -translate-y-1/2">
                <fieldset className="relative flex flex-col gap-2 border border-blue-400 rounded-2xl p-5">
                    <legend>Добавить сотрудника</legend>
                    <Closed className='absolute w-7 h-7 -top-9 -right-7.5'/>
                    <div className="flex gap-3 justify-between">
                        <label htmlFor="name">Имя:</label>
                        <input className="border border-blue-400 rounded" type="text" name="name" id="name" autoComplete="nope" required/>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <label htmlFor="surename">Фамилия:</label>
                        <input className="border border-blue-400 rounded" type="text" name="surename" id="surename" autoComplete="nope" required/>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <label htmlFor="email">Email:</label>
                        <input className="border border-blue-400 rounded" type="text" name="email" id="email" required/>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <label htmlFor="role">Должность:</label>
                        <input className="border border-blue-400 rounded" type="text" name="role" id="role" required/>
                    </div>
                    <button className="p-1.5 bg-blue-300 rounded mt-5 w-1/2 mx-auto"type="submit">Сохранить</button>
                </fieldset>
            </form>
    )
}
