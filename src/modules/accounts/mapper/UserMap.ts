import IUserResponseDTO from "../dtos/IUserResponseDTO";
import User from "../infra/typeorm/entities/User";

class UserMap {
  static toDTO({ name, email, id }: User): IUserResponseDTO {
    return {
      name,
      email,
      id
    };
  }
}

export default UserMap;
