import { FormWrapper } from './FormComponent.style';

export const FormComponent = () => {
    return(
        <FormWrapper>
          <div className="row">
            <div className="form-label-wrapper col-sm-6">
              <input type="text" name="name" id="name" placeholder='Nome'/>
            </div>
            <div className="form-label-wrapper col-sm-6">
              <input type="email" name="email" id="email" placeholder='Email'/>
            </div>
            <div className="form-label-wrapper col-sm-12">
              <input type="text" name="phone" id="phone" placeholder='Telefone'/>
            </div>
            <textarea className='text-label' name="msg" id="msg" placeholder='Digite a sua mensagem'></textarea>
            <p className='max-letter'>0 de 500 caracteres</p>
          </div>
        </FormWrapper>
    );
}