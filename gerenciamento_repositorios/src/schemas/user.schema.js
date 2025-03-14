import z from 'zod'

export const createUserSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string()
    .min(4, { message: 'A senha deve ter pelo menos 4 caracteres'})
    .max(30, { message: 'A senha não pode exceder 30 caracteres'})
}).strip()