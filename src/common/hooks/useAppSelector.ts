import { useSelector } from "react-redux"
import type {RootState} from "@/app/ui/App/model/store.ts";



export const useAppSelector = useSelector.withTypes<RootState>()
