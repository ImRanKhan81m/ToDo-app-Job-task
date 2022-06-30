import React from 'react';
import { useForm } from "react-hook-form";

const InputForm = ({handlePost}) => { 
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <div className='flex justify-center items-center pt-5 mb-16'>
            <div className="mid-content card flex-shrink-0 w-full  shadow-xl bg-base-100 ">
                <div className="card-body">
                    <h1 className='text-3xl text-center font-bold'>What's the Plan for Today?</h1>
                    <form onSubmit={handleSubmit(handlePost)} id="myForm">

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Title:</span>
                            </label>
                            <input
                                type="text"
                                name='userName'
                                placeholder="Add a Tit"
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
                        <button className='btn btn-primary w-32'>Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputForm;