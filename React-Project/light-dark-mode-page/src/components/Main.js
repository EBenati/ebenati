import React from "react"

export default function Main({darkMode}) {
    return (
        <main className={darkMode ? "dark" : ""}>
            <h1 className="main--title">Curiosidades Sobre React</h1>
            <ul className="main--facts">
                <li>Foi lançado em 2013</li>
                <li>Foi criado por Jordan Walke</li>
                <li>Tem mais de 100 mil estrelas no GitHub</li>
                <li>É mantido pelo Facebook</li>
                <li>É utilizado por milhares de empresas</li>
                <li>Está em alta no mercado de trabalho</li>
                <li>Está entre as bibliotecas mais pesquisadas na internet</li>
            </ul>
        </main>
    )
}