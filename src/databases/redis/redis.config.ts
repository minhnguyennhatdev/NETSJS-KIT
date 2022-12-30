const redisConfig = {
  KEY: {
    LIST: 'list',
    CACHE_ID: (id: string) => `id:${id}`,
  },
};

export default redisConfig;
