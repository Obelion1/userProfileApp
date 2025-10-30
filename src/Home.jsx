import { useState } from 'react'

function Home (){
    const [hoveringSecond, setHoveringSecond] = useState(false)

    return (
        <div className={`home-container${hoveringSecond ? ' dark' : ''}`}>
        <h1 className="home-title-black">Wie sie sehen</h1>
        <h1
            className="home-title-white"
            onMouseEnter={() => setHoveringSecond(true)}
            onMouseLeave={() => setHoveringSecond(false)}
        >
            sehen sie nichts
        </h1>
        </div>
    )
}
export default Home