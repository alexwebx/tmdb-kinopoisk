import s from "./Search.module.css";
import {type ChangeEvent, useEffect, useState} from "react";


type Props = {
    onSubmit: (query: string) => void;
    onClear?: () => void;
    val?: string;
};

export const Search = ({ onSubmit, val , onClear }:Props) =>{
    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(val ?? "");
    }, [val]);

    const handleClick = () => {
        if (!value.trim()) return;
        onSubmit(value.trim());
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        setValue(v);

        if (v === "") {
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
                onInput={(e) => {
                    const v = (e.target as HTMLInputElement).value;
                    if (v === "") {
                        onClear?.();
                    }
                }}
            />
            <button
                className={s.search__btn}
                disabled={!value.trim()}
                onClick={handleClick}
            >Search</button>
        </div>
    )
}