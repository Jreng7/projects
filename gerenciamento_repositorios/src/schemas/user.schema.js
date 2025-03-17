import z from 'zod';

// Schema para criação de usuário
export const createUserSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string()
    .min(4, { message: 'A senha deve ter pelo menos 4 caracteres'})
    .max(30, { message: 'A senha não pode exceder 30 caracteres'})
}).strip();


// Schema para atualização de usuário
export const updateUserSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }).optional(),
  password: z.string()
    .min(4, { message: 'A senha deve ter pelo menos 4 caracteres'})
    .max(30, { message: 'A senha não pode exceder 30 caracteres'}).optional()
}).strip();


export const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().min(1, { message: 'Senha obrigatória' }) // Não precisa do mesmo min do cadastro
}).strip();