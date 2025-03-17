import jwt from 'jsonwebtoken';
import auth from '../config/auth-jwt.js';

async function authMiddleware (req, res, next) {
  
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Formato de token inválido' });
  }

  const token = authHeader.split(' ')[1];
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