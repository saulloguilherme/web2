import React from 'react';
import { useFormContext } from 'react-hook-form';

const Contato = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>1 Contato</h2>
      <div>
        <label>Nome:</label>
        <input
          {...register('nome', { required: 'Nome é obrigatório' })}
          placeholder="Como prefere ser chamado"
        />
        {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message}</span>}
      </div>
      <div>
        <label>Telefone:</label>
        <input
          {...register('telefone', { required: 'Telefone é obrigatório' })}
          placeholder="Digite seu número de WhatsApp"
        />
        {errors.telefone && <span style={{ color: 'red' }}>{errors.telefone.message}</span>}
      </div>
      <div>
        <label>E-mail:</label>
        <input
          {...register('email', {
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido',
            },
          })}
          placeholder="Digite seu e-mail"
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </div>
    </div>
  );
};

export default Contato;