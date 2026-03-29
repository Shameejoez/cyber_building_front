import { Form } from "../../components/Forms/Form"
import { useLogin } from "../../services/cyberApi"

const authFormInputsData = {
    name: "Авторизация",
    inputsNames: ['email', 'password']
}

type LoginPageProps = {
    
}

export const LoginPage = ({}: LoginPageProps) => {
    const [login, {isLoading, error, data}] = useLogin()

    const handleSubmit = async (data: Record<string, string>) => {
        const {email, password} = data

        console.log(email, password)
        try {
            const result = await login({email, password}).unwrap()
                console.log('Успешный вход:', result);

        } catch (e) {
             console.error('Ошибка входа:', e);
        }
    }
    return (
        /* Контейнер */
    <div className="relative w-full h-full">
        <h1>Авторизация</h1>
            <Form onSubmit={(data) => handleSubmit(data)} 
            formName={authFormInputsData.name} itemsNames={authFormInputsData.inputsNames}/>
    </div>
    )
}
