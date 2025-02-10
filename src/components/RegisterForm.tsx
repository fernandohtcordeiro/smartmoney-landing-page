export default function RegisterForm() {
    return (
      <div className="register-form-container">
        <h3 className="register-form-title">
          Cadastre-se e faça parte do lançamento oficial
        </h3>
        <div className="register-form-radio-group">
          <label>
            <input type="radio" name="type" defaultChecked /> Para você
          </label>
          <label>
            <input type="radio" name="type" /> Para empresa
          </label>
        </div>
        <input type="text" className="register-form-input" placeholder="Nome" />
        <input type="email" className="register-form-input" placeholder="E-mail" />
        <input type="tel" className="register-form-input" placeholder="Celular" />
        <button className="register-form-button">Quero ser cliente</button>
        <p style={{ fontSize: "0.9rem", color: "#777", marginTop: "10px" }}>
          Ao enviar seus dados, você autoriza a SmartMoney a entrar em contato.
        </p>
      </div>
    );
  }
  