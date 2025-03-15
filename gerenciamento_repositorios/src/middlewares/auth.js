import jwt from 'jsonwebtoken';
import auth from '../config/auth-jwt.js';

async function authMiddleware (req, res, next) {
  
  const authHeader = req.headers.authorization;

  // 1. Verifica se o header existe e começa com "Bearer "
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Formato de token inválido' });
  }

  // 2. Extrai o token após a validação do formato
  const token = authHeader.split(' ')[1];

  // 3. Verifica se o token existe (evita "Bearer " sem token)
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, auth.secret);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

export { authMiddleware }