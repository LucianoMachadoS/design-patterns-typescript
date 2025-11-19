import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (Class)');
  } else {
    console.log('Email é inválido (Class)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FN)');
  } else {
    console.log('Email é inválido (FN)');
  }
}

const email = 'lucianoo@gmail.com';

validaEmail(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);
