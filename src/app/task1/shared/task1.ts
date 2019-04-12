export class Task1 {
  public id: string;
  public name: string;
  public status: string;
  public percentage: string;
  public createdAt: string;
  public finishAt:string

  constructor(id: string, name: string,status :string, percentage: string, createdAt: string, finishAt :string ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.percentage = percentage;
    this.createdAt = createdAt;
    this.finishAt = finishAt;
  }

}
