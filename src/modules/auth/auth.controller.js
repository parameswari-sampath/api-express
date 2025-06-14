import * as AuthService from './auth.service.js';

export async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const result = await AuthService.register({ name, email, password });
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login({ email, password });
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
}
