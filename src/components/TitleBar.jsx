import "./TitleBar.css"


export default function TitleBar({ title, subtitle }) {
    return (
        <section className="title-card" role ="banner" aria-label={title}>
        {/* one master path in <defs> */}
        <svg style={{position:"absolute", width:0, height:0}} aria-hidden="true">
        <defs>
            <path id="cornerBlob" d="
            M167.702 541.565
            C144.681 639.708 0.228075 622.993 0.228138 522.186
            L0.228098 130.759
            C0.228091 58.8788 58.499 0.607877 130.38 0.608007
            L599.856 0.608824
            C714.128 0.608991 728.939 166.269 616.479 186.539
            L503.596 212.137
            C489.204 215.401 475.073 219.722 461.317 225.065
            L403.016 247.712
            C375.153 258.535 349.064 273.461 325.614 291.996
            L306.195 307.345
            C267.01 338.316 236.178 378.58 216.496 424.486
            L172.326 527.504
            C170.378 532.048 168.831 536.752 167.702 541.565
            Z" />
        </defs>
        </svg>

        {/* TOP-LEFT */}
        <svg className="title-corner tl" viewBox="0 0 694 608" aria-hidden="true">
        <use href="#cornerBlob" className="corner-fill" />
        </svg>

        {/* BOTTOM-RIGHT (mirror of the same path) */}
        <svg className="title-corner br" viewBox="0 0 694 608" aria-hidden="true">
        <use href="#cornerBlob" className="corner-fill" />
        </svg>
        

            <div className="title-inner">
                <h1 className="title-text">{title}</h1>
                <span className="title-underline" aria-hidden="true" />
            </div>
        </section>
    );
}