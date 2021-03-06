import PropertyImage from "../infra/typeorm/entities/PropertyImage";

interface IPropertiesImagesRepository {
  create(property_id: string, image_name: string): Promise<PropertyImage>;
}

export default IPropertiesImagesRepository;
