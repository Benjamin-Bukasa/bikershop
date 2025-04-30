const jwt = require('jsonwebtoken');

// Middleware pour vérifier le token et le rôle
const verifyUser = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // On attache l'utilisateur décodé à la requête

      // Si roles est vide, on laisse passer tous les utilisateurs authentifiés
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
      }

      next();
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: 'Invalid token.' });
    }
  };
};

module.exports = verifyUser;
