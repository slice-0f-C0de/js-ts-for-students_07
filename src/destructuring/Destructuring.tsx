import React from "react";

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
        }
    }
}

export type PropsType = {
    title: string,
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...restProps} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}