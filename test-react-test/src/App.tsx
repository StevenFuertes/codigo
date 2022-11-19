//FC es Funcional Component
// ChangeEvent se pone para los eventos como el tipo number etc
import { FC, useState, ChangeEvent } from "react";
import Header from "./components/Header";
import "./App.css";

interface User {
  id: number;
  name: string;
  last_name: string;
  is_admin: boolean;
}

interface Formulario {
  name: string;
  last_name: string;
  is_admin: boolean;
}

const App: FC = (): JSX.Element => {
  // const [count, setCount] = useState<number>(0)

  const [formulario, setFormulario] = useState<Formulario>({
    name: "",
    last_name: "",
    is_admin: false,
  });

  const [users, setUsers] = useState<User[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setFormulario({
      ...formulario,
      [name]: name === "is_admin" ? checked : value,
    });
  };

  const storeUser = () => {
    const newUser: User = { id: users.length + 1, ...formulario };
    setUsers([...users, newUser]);
    setFormulario({
      name: "",
      is_admin: false,
      last_name: "",
    });
  };

  // const handleDisminuir = () => setCount( count - 1);

  // { " "} es para poner espacios

  return (
    <div className="App">
      <Header titulo="Modo Hacker" subtitulo="ACTIVADO" />
      <img width={300}
        src="https://estaticos.muyinteresante.es/uploads/images/article/57d90dac5bafe89c56987ed0/hackers_0.jpg"
        alt=""
      />
      {/* <h1>{count} </h1>
      <button onClick={handleAumento} >Aumentar</button>{ " "}
      <button onClick={handleDisminuir} >Disminuir</button> */}
     <div>
        <div>
          <input
            type="text"
            name="name"
            value={formulario.name}
            onChange={handleInputChange}
            placeholder="Ingrese su nombre"
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            value={formulario.last_name}
            onChange={handleInputChange}
            placeholder="Ingrese su apellido"
          />
        </div>
        <div>
          <input
            name="is_admin"
            checked={formulario.is_admin}
            onChange={handleInputChange}
            type="checkbox"
          />{" "}
          Es admin?
        </div>
        <div>
          <button onClick={storeUser}>Guardar</button>
        </div>
        <div>
          <h2>Lista de usuarios</h2>
          <ul>
            {users.map((user: User) => (
              <li>
                {user.name} - {user.last_name} -{" "}
                {user.is_admin ? "Es admin" : "No es admin"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
