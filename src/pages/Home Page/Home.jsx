import {useEffect, useState} from "react"
import './Home.css'

import pic1 from "../../assets/pics/MainPage/Photo1.JPG"
import pic2 from "../../assets/pics/MainPage/cat.jpeg"
import pic3 from "../../assets/pics/MainPage/Photo2.JPG"

const IMAGES = [pic1, pic2, pic3]

export default function Home() {
    const [i, setI] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setI(n => (n + 1) % IMAGES.length)
        }, 2500)
        return () => clearInterval(id)
    }, [])

    return (
    <div className="SecurityCam">
        <div className="cam-frame">
            {IMAGES.map((src, idx) => (
                <img
                    key={src}
                    src={src}
                    alt={`Security frame ${idx + 1}`}
                    className={`cam__img ${i === idx ? "is-active" : ""}`}
                    aria-hidden={i !== idx}
                />
            ))}

            <div className="cam-overlay"></div>
            <div className="cam-hud">
                <span className="rec">● REC</span>
                <span className="time">TO BE ADDED</span>
            </div>
        </div>
    </div>
    )
    
}