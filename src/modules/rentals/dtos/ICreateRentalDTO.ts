interface ICreateRentalDTO {
  user_id: string;
  property_id: string;
  expected_return_date: Date;
  id?: string;
  final_date?: Date;
  total?: number;
}

export default ICreateRentalDTO;
