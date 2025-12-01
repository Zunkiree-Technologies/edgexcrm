import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

// @MVP Modules - Uncomment as implemented
// import { AuthModule } from './modules/auth/auth.module';
// import { UsersModule } from './modules/users/users.module';
// import { LeadsModule } from './modules/leads/leads.module';
// import { ContactsModule } from './modules/contacts/contacts.module';
// import { StudentsModule } from './modules/students/students.module';
// import { ApplicationsModule } from './modules/applications/applications.module';
// import { TasksModule } from './modules/tasks/tasks.module';
// import { DocumentsModule } from './modules/documents/documents.module';
// import { CommunicationsModule } from './modules/communications/communications.module';
// import { WorkflowsModule } from './modules/workflows/workflows.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Database
    PrismaModule,

    // @MVP Modules - Uncomment as implemented
    // AuthModule,
    // UsersModule,
    // LeadsModule,
    // ContactsModule,
    // StudentsModule,
    // ApplicationsModule,
    // TasksModule,
    // DocumentsModule,
    // CommunicationsModule,
    // WorkflowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
