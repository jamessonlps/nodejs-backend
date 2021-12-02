import { Request, Response } from "express";
import { container } from "tsyringe";
import UploadPropertyImagesUseCase from "./UploadPropertyImagesUseCase";

interface IFiles {
  filename: string;
}

class UploadPropertyImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadPropertyImagesUseCase = container.resolve(UploadPropertyImagesUseCase);

    const images_name = images.map((file) => file.filename);

    await uploadPropertyImagesUseCase.execute({ property_id: id, images_name });

    return response.status(201).send();
  }
}

export default UploadPropertyImagesController;
