import React, {useEffect, useState} from 'react';
import {LanguageType} from "../types/language.types";
import {languageActions} from "../store/action-creators/language/language.action-creators";
import {useDispatch} from "react-redux";

const languages = [
    {lang: "eng", id: 1},
    {lang: "cz", id: 2},
    {lang: "ukr", id: 3},
    {lang: "rus", id: 4},
    {lang: "hr", id: 5},
]

export const Select: React.FC = () => {
    const [value, setValue] = useState<LanguageType>('eng')

    const dispatch = useDispatch()

    const onValueChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value as LanguageType)
    }

    useEffect(() => {
        dispatch(languageActions.languageChanged(value))
    }, [value])

    return (
        <div className="flex justify-center items-center w-20">
            <select className="
                          form-select appearance-none
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          rounded
                          transition
                          cursor-pointer
                          ease-in-out
                          m-0
                          focus:text-gray-700
                          focus:bg-white
                          focus:border-green-500
                          focus:outline-none
                          "
                    onChange={onValueChangeHandler}
            >
                {languages?.map(l => <option className={"after:cursor-pointer"} key={l.id} value={l.lang}>{l.lang}</option>)}
            </select>
        </div>
    );
};
