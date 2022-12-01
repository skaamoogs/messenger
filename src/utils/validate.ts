import Block from "../modules/block";

export const RULES = {
  email: {
    pattern:
      /^[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9][.#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]*@[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+\.[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+$/,
    message: "Некорректный email. Допускаются латиница, спецсимволы и цифры.",
  },
  login: {
    pattern: /^(?=.*[A-Za-z_-])([\w-]){3,20}$/,
    message: `Логин должен содержать 3 до 20 символов,
         латиница, может содержать цифры, но не состоять из них, 
         без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`,
  },
  first_name: {
    pattern: /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/,
    message: `Некорректное имя. Первая буква должна быть заглавной, 
      без пробелов, цифр и спецсимволов (допустим только дефис).`,
  },
  second_name: {
    pattern: /^[A-ZА-Я][A-Za-zА-Яа-я-]*$/,
    message: `Некорректная фамилия. Первая буква должна быть заглавной, 
      без пробелов, цифр и спецсимволов (допустим только дефис).`,
  },
  nickname: {
    pattern: /^.+$/,
    message: "Поле не должно быть пустым",
  },
  phone: {
    pattern: /^(\+?\d){10,15}$/,
    message: `Некорректный формат номера. Телефон должен содержать от 10 до 15 символов, 
    состоять из цифр, может начинается с плюса.`,
  },
  password: {
    pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
    message: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
    обязательно хотя бы одна заглавная буква и цифра.`,
  },
  old_password: {
    pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
    message: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
    обязательно хотя бы одна заглавная буква и цифра.`,
  },
  new_password: {
    pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
    message: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
    обязательно хотя бы одна заглавная буква и цифра.`,
  },
  confirm_password: {
    pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
    message: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
    обязательно хотя бы одна заглавная буква и цифра.`,
  },
};

export const inputValidator = (name: string, value: string) => {
  if (name && value) {
    return RULES[name].pattern.test(value);
  }
  return false;
};

export const formValidator = (fields: Block[]) => {
  let message = "";
  const test = fields.every((field) => {
    const input = field.children.input as Block;
    const element = input.getContent() as HTMLInputElement;
    if (!inputValidator(element.name, element.value)) {
      return false;
    }
    return true;
  });

  if (!test) {
    message = "Некоторые поля заполнены неверно!";
    return { test, message };
  }

  const password = fields.find((field) => {
    const input = field.children.input as Block;
    return (
      input.getContent()?.id === "password" ||
      input.getContent()?.id === "new_password"
    );
  })?.children.input as Block;

  const confirmPassword = fields.find((field) => {
    const input = field.children.input as Block;
    return input.getContent()?.id === "confirm_password";
  })?.children.input as Block;

  if (password && confirmPassword) {
    const passwordContent = password.getContent() as HTMLInputElement;
    const confirmPasswordContent =
      confirmPassword.getContent() as HTMLInputElement;

    if (passwordContent.value !== confirmPasswordContent.value) {
      return { test: false, message: "Пароли не совпадают!" };
    }
  }
  return { test: true };
};

export const logData = (context: Block) => {
  const data: Record<string, string> = {};
  const inputs = context.getContent()?.querySelectorAll("input");
  inputs?.forEach((input) => {
    data[input.name] = input.value;
  });
  return data;
};
