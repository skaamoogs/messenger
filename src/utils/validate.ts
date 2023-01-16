import Block from "../modules/block";

export const RULES = {
  email: {
    pattern:
      /^[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9][.#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]*@[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+\.[#!%$‘&+*–/=?^_`{|}~A-Za-z0-9]+$/,
    message: "Некорректный email. Допускаются латиница, спецсимволы и цифры.",
  },
  login: {
    pattern: /^(?=.*[A-Za-z_-])([\w-]){3,20}$/,
    message: `Логин должен содержать от 3 до 20 символов,
         латиницей, может содержать цифры, но не состоять из них, 
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
  display_name: {
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
  oldPassword: {
    pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
    message: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
    обязательно хотя бы одна заглавная буква и цифра.`,
  },
  newPassword: {
    pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
    message: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
    обязательно хотя бы одна заглавная буква и цифра.`,
  },
  confirmPassword: {
    pattern: /^(?=.*[A-ZА-Я])(?=.*\d)(.*){8,40}$/,
    message: `Некорректный пароль. Пароль должен содержать от 8 до 40 символов, 
    обязательно хотя бы одна заглавная буква и цифра.`,
  },
  message: {
    pattern: /.+/,
    message: "Сообщение не должно быть пустым",
  },
  chat: {
    pattern: /.+/,
    message: "Сообщение не должно быть пустым",
  },
};

export const inputValidator = (name: string, value: string) => {
  if (name && value) {
    return RULES[name].pattern.test(value);
  }
  return false;
};

export const checkPasswords = (fields: Block[]) => {
  const password = fields.find((field) => {
    const input = field.children.input as Block;
    return (
      input.getContent()?.id === "password" ||
      input.getContent()?.id === "newPassword"
    );
  })?.children.input as Block;

  const confirmPassword = fields.find((field) => {
    const input = field.children.input as Block;
    return input.getContent()?.id === "confirmPassword";
  })?.children.input as Block;

  if (password && confirmPassword) {
    const passwordContent = password.getContent() as HTMLInputElement;
    const confirmPasswordContent =
      confirmPassword.getContent() as HTMLInputElement;

    if (passwordContent.value !== confirmPasswordContent.value) {
      return false;
    }
  }
  return true;
};

export const formValidator = (fields: Block[]) =>
  fields.every((field) => {
    const input = field.children.input as Block;
    const element = input.getContent() as HTMLInputElement;
    if (!inputValidator(element.name, element.value)) {
      return false;
    }
    return true;
  }) && checkPasswords(fields);

export const logData = (context: Block) => {
  const data: Record<string, string> = {};
  const inputs = context.getContent()?.querySelectorAll("input");
  inputs?.forEach((input) => {
    if (input.id !== "confirmPassword") {
      data[input.name] = input.value;
    }
  });
  return data;
};
