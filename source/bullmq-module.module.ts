import { DynamicModule, Module } from '@nestjs/common';
import { BullMQCoreModule } from '@/bullmq-module.core-module';
import {
  BullMQModuleAsyncOptions,
  BullMQModuleOptions,
} from '@/bullmq-module.interfaces';

@Module({})
export class BullMQModule {
  public static forRoot(
    options: BullMQModuleOptions,
    connection?: string,
  ): DynamicModule {
    return {
      module: BullMQModule,
      imports: [BullMQCoreModule.forRoot(options, connection)],
      exports: [BullMQCoreModule],
    };
  }

  public static forRootAsync(
    options: BullMQModuleAsyncOptions,
    connection?: string,
  ): DynamicModule {
    return {
      module: BullMQModule,
      imports: [BullMQCoreModule.forRootAsync(options, connection)],
      exports: [BullMQCoreModule],
    };
  }
}
