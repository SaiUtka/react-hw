import {useForm} from "react-hook-form";

import {createUser} from "../../services";
import {logDOM} from "@testing-library/react";

function Users() {
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                username: 'username',
                email: 'youremail@gmail.com'
            }
        }
    )
    const submit = (item) => {
        createUser(item).then(value => console.log(value))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})}/>
                {
                    errors.name && <span>Field is required</span>
                }
                <input type="text" {...register('username')}/>
                <input type="text" {...register('email')}/>
                <input type="submit"/>
            </form>

        </div>
    );

}

export {Users}