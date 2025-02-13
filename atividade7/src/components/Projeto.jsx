import React from 'react';
import { useFormContext } from 'react-hook-form';

const Projeto = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>3 Projeto</h2>
      <div>
        <label>Descreva seu projeto:</label>
        <textarea
          {...register('descricaoProjeto', { required: 'Descreva seu projeto' })}
          placeholder="Descreva seu projeto"
        />
        {errors.descricaoProjeto && (
          <span style={{ color: 'red' }}>{errors.descricaoProjeto.message}</span>
        )}
      </div>
    </div>
  );
};

export default Projeto;