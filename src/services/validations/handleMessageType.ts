const handleMessageType = (type: string) => { 
  switch (type) {
    case 'any.required': return '"productsIds" is required';
    case 'array.includesRequiredUnknowns': return '"productsIds" must include only numbers';
    default: return '"productsIds" must be an array';
  }
};

export default handleMessageType;