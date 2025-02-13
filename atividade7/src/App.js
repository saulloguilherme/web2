import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Contato from './components/Contato';
import Empresa from './components/Empresa';
import Projeto from './components/Projeto';
import BarraDeProgresso from './components/BarraDeProgresso';

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  telefone: yup.string().required('Telefone é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  nomeEmpresa: yup.string().required('Nome da empresa é obrigatório'),
  numeroFuncionarios: yup.number().required('Número de funcionários é obrigatório'),
  sobreNegocio: yup.string().required('Fale sobre seu negócio'),
  descricaoProjeto: yup.string().required('Descreva seu projeto'),
});

const App = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
    alert('Formulário enviado com sucesso!');
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <FormProvider {...methods}>
      <div className="App" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>Formulário Multi-Etapas</h1>
        <BarraDeProgresso currentStep={step} totalSteps={3} />
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 1 && <Contato />}
          {step === 2 && <Empresa />}
          {step === 3 && <Projeto />}

          <div style={{ marginTop: '20px' }}>
            {step > 1 && (
              <button type="button" onClick={prevStep} style={{ marginRight: '10px' }}>
                VOLTAR
              </button>
            )}
            {step < 3 ? (
              <button type="button" onClick={nextStep}>
                CONTINUAR
              </button>
            ) : (
              <button type="submit">ENVIAR</button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default App;