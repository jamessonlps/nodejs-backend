import { inject, injectable } from "tsyringe";
import IPropertiesImagesRepository from "../../repositories/IPropertiesImagesRepository";

interface IRequest {
  property_id: string;
  images_name: string[];
}

@injectable()
class UploadPropertyImagesUseCase {
  constructor(
    @inject('PropertiesImagesRepository')
    private propertiesImagesRepository: IPropertiesImagesRepository
  ) {}

  async execute({ property_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.propertiesImagesRepository.create(property_id, image);
    });
  }
}

export default UploadPropertyImagesUseCase;
