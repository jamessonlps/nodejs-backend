import { getRepository, Repository } from "typeorm";
import PropertyImage from "../entities/PropertyImage";

class PropertiesImagesRepository {
  private repository: Repository<PropertyImage>;

  constructor() {
    this.repository = getRepository(PropertyImage);
  }

  async create(property_id: string, image_name: string): Promise<PropertyImage> {
    const propertyImage = this.repository.create({ property_id, image_name });

    await this.repository.save(propertyImage);

    return propertyImage;
  }
}

export default PropertiesImagesRepository;
