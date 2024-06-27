import { useSelector } from "react-redux";

const useCheckAuth = () => {
    const {auth} = useSelector((state:any) => state.user)
    const checkAuth = (key:string) => {
        return auth.includes(key)
    }
    return {
        checkAuth
    }
}
export default useCheckAuth