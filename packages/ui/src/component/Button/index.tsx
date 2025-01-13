import { useState } from "react"

export const Button = () => {
    const [on, setOn] = useState(false)

return <div><button type="button" onClick={()=>setOn(!on)}>click</button>{on ? "ON" : "OFF"}</div>
}