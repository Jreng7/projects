import { z } from 'zod';

export const createRepoSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }), // Não pode ser vazio
  url: z.string().url({ message: "URL do GitHub inválida" }),  // Valida formato de URL
  userId: z.string().min(1, { message: "ID do usuário inválido" }) // Garante que o userId existe
}).strip(); // Remove campos extras que não estão no schema

