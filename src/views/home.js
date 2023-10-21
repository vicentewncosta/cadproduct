import React from 'react'

function Home () {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Tasklist 💻</h1>
            <p className="lead">
                Organizador de tarefas diárias.
            </p>
            <hr className="my-4" />
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                    Cadastrar tarefa
                </a>
            </p>
        </div>
    )    
}

export default Home;