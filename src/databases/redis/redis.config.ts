const redisConfig = {
  KEYS: {
    DEMO: 'demo',
    DEMO_ID: (id: string) => `demo:${id}`,
  },
};

export default redisConfig;
