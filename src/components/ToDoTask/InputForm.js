import React from 'react';
import { useForm } from "react-hook-form";

const InputForm = ({handlePost}) => { 
    const { register, formState: { errors }, handleSubmit } = useForm();



    return (
        <div className='flex justify-center items-center px-5 pt-5'>
            <div className="mid-content card flex-shrink-0 w-full lg:max-w-lg md:max-w-lg sm:max-w-lg max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold'>What's the Plan for Today?</h1>
                    <form onSubmit={handleSubmit(handlePost)}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Title:</span>
                            </label>
                            <input
                                type="text"
                                name='userName'
                                placeholder="Add a Title"
                                className="input input-bordered focus:outline-none"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'Title is Required!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                            </label>
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Description:</span>
                            </label>
                            <input
                                type="text"
                                name="textData"
                                placeholder="Add a Plan"
                                className="input input-bordered focus:outline-none"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-32 btn-primary' type="submit" value="Add Task" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputForm;