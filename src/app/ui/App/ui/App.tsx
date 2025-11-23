import {Footer, Header} from "@/common/components";
import {Routing} from "@/common/routing";
import {useAppSelector, useGlobalLoading} from "@/common/hooks";
import {selectThemeMode} from "@/app/ui/App/model/app-slice.ts";
import {useEffect} from "react";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {ToastContainer} from "react-toastify";

export function App() {
    const themeMode = useAppSelector(selectThemeMode)
    const isGlobalLoading = useGlobalLoading()

    useEffect(() => {
        document.body.classList.toggle("dark", themeMode === "dark");
    }, [themeMode]);

  return (
    <>
        <Header/>
        {isGlobalLoading && <LinearProgress />}
        <div className="routs">
            <Routing/>
        </div>
        <Footer/>
        <ToastContainer />
    </>
  )
}
