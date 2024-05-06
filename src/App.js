import { useState } from "react";
import Counter from "./Counter"

function App() {
    const [cnt, setcnt] = useState(0)
    const Increment = () => {
        setcnt(cnt + 1)
    }
    const Decrement = () => {
        setcnt(cnt - 1)
    }
    const Reset = () => {
        setcnt(0)
    }
    return ( <
        Counter Number = { cnt }
        Plus = { Increment }
        Minus = { Decrement }
        Reset = { Reset }
        />
    )
}

export default App;