import React from 'react';
import { useFormContext } from 'react-hook-form';

const Empresa = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>2 Empresa</h2>
      <div>
        <label>Nome da empresa:</label>
        <input
          {...register('nomeEmpresa', { required: 'Nome da empresa é obrigatório' })}
          placeholder="Qual é o nome da empresa"
        />
        {errors.nomeEmpresa && <span style={{ color: 'red' }}>{errors.nomeEmpresa.message}</span>}
      </div>
      <div>
        <label>Número de funcionários:</label>
        <input
          type="number"
          {...register('numeroFuncionarios', { required: 'Número de funcionários é obrigatório' })}
          placeholder="Digite o número de colaboradores"
        />
        {errors.numeroFuncionarios && (
          <span style={{ color: 'red' }}>{errors.numeroFuncionarios.message}</span>
        )}
      </div>
      <div>
        <label>Sobre seu negócio:</label>
        <textarea
          {...register('sobreNegocio', { required: 'descreva seus produtos ou serviços' })}
          placeholder="descreva seus produtos ou serviços"
        />
        {errors.sobreNegocio && <span style={{ color: 'red' }}>{errors.sobreNegocio.message}</span>}
      </div>
    </div>
  );
};

export default Empresa;