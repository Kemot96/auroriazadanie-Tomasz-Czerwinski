import { Logger, Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService {
  private readonly logger = new Logger("REVIEWS SERVICE");

  log(message: string) {
    this.logger.log(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
