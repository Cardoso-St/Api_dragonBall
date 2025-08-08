import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Contato.css";

const Contato = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        mensagem: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!formData.mensagem.trim()) newErrors.mensagem = "Mensagem é obrigatória";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSuccess(true);
            setFormData({ nome: "", email: "", mensagem: "" });
            setErrors({});
        } else {
            setErrors(validationErrors);
            setSuccess(false);
        }
    };

    return (
        <>

            <section className="ContainerContato">
                <h2>Contato</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className={errors.nome ? "input-error" : ""}
                        />
                        {errors.nome && <span className="error-msg">{errors.nome}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            className={errors.mensagem ? "input-error" : ""}
                        />
                        {errors.mensagem && <span className="error-msg">{errors.mensagem}</span>}
                    </div>

                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>

                {success && <p className="success-msg">Mensagem enviada com sucesso! Obrigado pelo contato.</p>}
            </section>

        </>
    );
};

export default Contato;