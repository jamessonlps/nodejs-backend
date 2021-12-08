import { inject, injectable } from "tsyringe";
import IStorageProvider from "../../../../shared/container/providers/StorageProvider/IStorageProvider";
import IPropertiesImagesRepository from "../../repositories/IPropertiesImagesRepository";

interface IRequest {
  property_id: string;
  images_name: string[];
}

@injectable()
class UploadPropertyImagesUseCase {
  constructor(
    @inject('PropertiesImagesRepository')
    private propertiesImagesRepository: IPropertiesImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute({ property_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.propertiesImagesRepository.create(property_id, image);
      await this.storageProvider.save(image, 'properties');
    });
  }
}

export default UploadPropertyImagesUseCase;
