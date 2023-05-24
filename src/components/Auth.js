import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Auth({ changeIng }) {//Publica
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
   

    function handleSubmit(e) {
        e.preventDefault();
        const u = 'jmoreno@ud.edu.co';
        const c = '123456';

        if (username === u && password === c) {
            console.log(' -- Bienvenido --Ingreso correctamente ');
            changeIng(true);
            navigate("/home");
        } else {
            alert('Usuario o contraseña errados');
           }
    }

    function handleUsername(e) {
        const vr = e.target.value;
        setUsername(vr);
    }
    function handlePass(e) {
        setPassword(e.target.value);
    }
    return (
        <main role="main" className="container my-auto">
            <div className="row">
                <div id="login" className="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 className="text-center"> Autenticación </h2>
                    <img className="img-fluid mx-auto d-block rounded"
                        src="https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg" alt='alimentos'/>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="correo">Usuario </label>
                            <input id="correo" name="correo"
                                className="form-control" type="email"
                                placeholder="Correo electrónico"
                                onChange={handleUsername} />
                        </div>
                        <div className="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                className="form-control" type="password"
                                placeholder="Contraseña"
                                onChange={handlePass} />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary mb-2">
                            Iniciar sesión </button>
                        <br></br>
                        
                    </form>
                </div>
            </div>
        </main>
    )
}


export function Landing() {//Publica
    return (
        <h3> Promoción </h3>
    )
}