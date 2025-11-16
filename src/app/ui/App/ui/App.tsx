import {Footer, Header} from "@/common/components";
import {Routing} from "@/common/routing";
import {useAppSelector} from "@/common/hooks";
import {selectThemeMode} from "@/app/ui/App/model/app-slice.ts";
import {useEffect} from "react";

export function App() {
    const themeMode = useAppSelector(selectThemeMode)

    useEffect(() => {
        document.body.classList.toggle("dark", themeMode === "dark");
    }, [themeMode]);

  return (
    <>
        <Header/>
        <Routing/>
        <Footer/>
    </>
  )
}
