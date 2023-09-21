import  PersonModel from "Frontend/generated/com/example/application/person/PersonModel";
import {LoginService} from "Frontend/generated/endpoints";
import {TextField} from "@hilla/react-components/TextField.js";
import {Button} from "@hilla/react-components/Button.js";
import Person from "Frontend/generated/com/example/application/person/Person";
import {useEffect} from "react";
import useForm from "@hilla/form";
import React  from "react";

 const Login = () => {
     const {model, field, submit, read} = useForm((PersonModel), {
        onSubmit: async (person: Person) => {
            await LoginService.loginPerson(person);
        }
    });
    useEffect(() => {
        read();
    }, []);
    return (
        <div className={"p-m flex-col gap-s items-center justify-center"}>
            <TextField label={"Name"} {...field(model.name)}/>
            <TextField label={"Phone"} {...field(model.phone)}/>
            <TextField label={"Email"} {...field(model.email)}/>
            <TextField label={"Password"} {...field(model.password)}/>
            <Button onClick={submit}>Submit</Button>

        </div>
    )
}
export default Login;