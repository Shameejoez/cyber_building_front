import { Form } from "../../components/Forms/Form"

const authFormInputsData = {
    name: "Авторизация",
    inputsNames: ['email', 'password']
}

type LoginPageProps = {
    
}

export const LoginPage = ({}: LoginPageProps) => {
    
    return (
        /* Контейнер */
    <div className="relative w-full h-full">
        <h1>Авторизация</h1>
            <Form onSubmit={(data) => {
                console.log(data.password),
                console.log(data.email)
            }} formName={authFormInputsData.name} itemsNames={authFormInputsData.inputsNames}/>
    </div>
    )
}
