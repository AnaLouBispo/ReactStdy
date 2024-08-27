import { useState } from "react";
import "./form.css"
const Form = () => {
  //Estado inicial do formulário
  const initialForm = {
    nome: "",
    email: "",
    passWord: "",
  };

  //Estado do formulário
  const [formState, setFormState] = useState(initialForm);

  // Função para lidar com a alteração dos campos de entrada

  const handleInput = (event) => {
    //Obter valor e o nome do campo de entrada
    const target = event.currentTarget;
    //Extrair valor e o nome do campo de entrada
    const { value, name } = target;

    //atualizar o estado do formulário com os novos valores
    setFormState({ ...formState, [name]: value });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formState.nome === "" ||
      formState.email == "" ||
      formState.passWord == ""
    ) {
      alert("Preencha os campos");
      return;
    }
    console.log(formState.nome, formState.email, formState.passWord);
    setFormState({ ...initialForm });
    alert("Dados Enviados XD")

  };

  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="nome"
        maxLength="20"
            value={formState.nome}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
             placeholder="email"
            id="email"
            name="email"
                maxLength="20"
            value={formState.email}
            onChange={handleInput}
          />
          <label htmlFor="passWord">PassWord</label>
          <input
            type="text"
             placeholder="password"
            id="passWord"
            name="passWord"
                maxLength="20"
            value={formState.passWord}
            onChange={handleInput}
          />
        </div>
        <div className="form-control">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
