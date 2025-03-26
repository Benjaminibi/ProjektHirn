const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Liste aller Benutzer abrufen
 *     description: Gibt eine Liste aller registrierten Benutzer zurück.
 *     responses:
 *       200:
 *         description: Erfolgreiche Antwort
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Max Mustermann
 */
router.get('/', function(req, res, next) {
  res.json([{ id: 1, name: 'Max Mustermann' }]);
});

module.exports = router;
