import React,{useState} from 'react'
import Spinner from "./Spinner"
function useSpinner() {
    const [visible, setVisible] = useState(false)
    const showSpinner = () => setVisible(true)
    const hideSpinner = () => setVisible(false)
    const spinner = visible && <Spinner />

    return [spinner, showSpinner, hideSpinner]
}

export default useSpinner
