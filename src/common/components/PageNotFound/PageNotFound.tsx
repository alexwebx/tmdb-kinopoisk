import s from './PageNotFound.module.css'
import {Button} from "@/common/components/Button/Button.tsx";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";

export const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <section className={s.container}>
            <h1 className={s.title}>404</h1>
            <h2 className={s.subtitle}>page not found</h2>
            <Button onclickHandler={()=>{
                navigate(Path.Main)
            }} titleButton={'Return to home page'} />
        </section>
    )
}