import { useState } from "react"
import Closed from "../../../public/images/icons/buttons/closedBtn.svg?react"

type FormProps = {
    itemsNames: string[]
    formName: string
    onSubmit: (data: Record<string, string>) => void;

}

export const Form = ({formName, itemsNames, onSubmit}: FormProps) => {

    const [formData, setFormData] = useState<Record<string, string>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
  };
    
    return (
            <form onSubmit={handleSubmit} action="" className="absolute px-8 py-4 bg-gray-300 top-1/2 left-1/2 rounded-2xl transform -translate-x-1/2 -translate-y-1/2">
                <fieldset className="relative flex flex-col gap-2 border border-blue-400 rounded-2xl p-5">
                    <legend>{formName}</legend>
                    <Closed className='absolute w-7 h-7 -top-9 -right-7.5'/>
                    {
                        itemsNames.map((name) => 
                            <div className="flex gap-3 justify-between">
                                <label htmlFor={name}>{name}:</label>
                                <input className="border border-blue-400 rounded" type="text" 
                                name={name} id={name} autoComplete="nope" required
                                value={formData[name] || ''}
                                onChange={handleChange}
                                />
                            </div>
                        )
                    }
                    <button className="p-1.5 bg-blue-300 rounded mt-5 w-1/2 mx-auto"type="submit">Сохранить</button>
                </fieldset>
            </form>
    )
}
