export class ApiResponse {
    status: number;
    message: number;
    result: any;
  
    constructor() {
      this.status = 0;
      this.message = 0;
      this.result = null;
    }
  }
  