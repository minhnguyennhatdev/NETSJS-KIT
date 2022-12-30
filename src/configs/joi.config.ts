import Joi from 'joi';

const validationEnv = {
  PORT: Joi.number().default(4000),
  MONGODB_URI: Joi.string().required(),
  REDIS_PORT: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
};

export default validationEnv;
