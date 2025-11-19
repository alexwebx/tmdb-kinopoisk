import s from "./Search.module.css";
import {type ChangeEvent, useState} from "react";


type Props = {
    onSubmit: (query: string) => void;
    onClear?: () => void;
};

export const Search = ({ onSubmit, onClear }:Props) =>{
    const [value, setValue] = useState("");

    const handleClick = () => {
        if (!value.trim()) return;
        onSubmit(value.trim());
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
        if (value === "") {
            onClear?.();
        }
    };

    return (
        <div className={s.search__box}>
            <input
                type="search"
                className={s.search__input}
                placeholder="Search for a movie"
                value={value}
                onChange={handleChange}
            />
            <button
                className={s.search__btn}
                disabled={!value.trim()}
                onClick={handleClick}
            >Search</button>
        </div>
    )
}