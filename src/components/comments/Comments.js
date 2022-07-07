import {useForm} from "react-hook-form";

import {createComment} from "../../services";
import {logDOM} from "@testing-library/react";

function Comments() {
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                body: 'body',
                email: 'youremail@gmail.com'
            }
        }
    )
    const submit = (item) => {
        createComment(item).then(({data}) => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})}/>
                {
                    errors.name && <span>Field is required</span>
                }
                <input type="text" {...register('body')}/>
                <input type="text" {...register('email')}/>
                <input type="submit"/>
            </form>

        </div>
    );

}

export {Comments}