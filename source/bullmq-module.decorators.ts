import { Inject } from '@nestjs/common';
import { getBullMQConnectionToken } from '@/bullmq-module.utils';

export const InjectBullMQ = (queueName?: string, connection?: string) => {
  return Inject(getBullMQConnectionToken({ name: queueName }, connection));
};
